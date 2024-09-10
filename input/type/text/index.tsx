import { useEffect, useRef, useState, FocusEvent, FormEvent, forwardRef, RefObject } from 'react';
import Icon, { TNames } from '@/components/icon';
import {
  StyleWrapper,
  StyleField,
  StyleBorder,
  StyleBorderOpen,
  StyleDescription,
  StyleInput,
  StyleInputFake,
  StyleFile,
  StyleFileName,
  StyleFileKb,
  StyleFileEmpty,
  StylePlaceholder,
  StyleBeforeButton,
  StyleNumberButtons,
  StyleBefore,
  StyleAfter,
  StyleAfterIcon,
  StyleGlobal,
} from './style';
import { IInput } from '@/components/input';
import validate from '@/components/input/validate';
import maskInput from '@/components/input/mask';

type TEventFocus = FocusEvent<HTMLInputElement>;
type TEventInput = FormEvent<HTMLInputElement>;

interface IAfterFunction {
  password: () => void;
  search: () => void;
}

interface IFiles {
  name: string;
  kb: number;
}

let spinClickInterval: number;
let spinClickTimeout: number;

const InputText = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const inputRef = ref || useRef<HTMLInputElement>(null);
  const {
    type = 'text',
    placeholder,
    value,
    description,
    noDescription,
    isOpen,
    onFocus,
    onBlur,
    onInput,
    onChange,
    after,
    before,
    id,
    maskReverse,
    disabled,
    readOnly,
    max = 100,
    min = 0,
    'data-mask': dataMask = '',
    'data-type': dataType,
  } = props;
  const [stateType, setStateType] = useState(type);
  const [stateOpen, setStateOpen] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [stateFocus, setStateFocus] = useState(false);
  const [stateWidth, setStateWidth] = useState(0);
  const [stateHeight, setStateHeight] = useState(0);
  const [stateValue, setStateValue] = useState(value || '');
  const [stateDescription, setStateDescription] = useState(description);
  const [stateWidthPlaceholder, setStateWidthPlaceholder] = useState(0);
  const [stateAfter, setStateAfter] = useState(after);
  const [stateBefore, setStateBefore] = useState(before);
  const [stateAfterIcon, setStateAfterIcon] = useState<TNames>();
  const [stateFiles, setStateFileList] = useState<IFiles[]>([]);
  const [stateIsSafari, setStateIsSafari] = useState(false);
  const [stateMask, setStateMask] = useState(dataMask);
  const [stateWidthBefore, setStateWidthBefore] = useState(0);
  const propsCustom = { ...props };

  delete propsCustom.value;
  delete propsCustom.placeholder;
  delete propsCustom.defaultValue;
  delete propsCustom.mask;

  const handleRenderResize = () => {
    const { current: currentField } = fieldRef;
    const { current: currentPlaceholder } = placeholderRef;
    if (currentField) {
      setStateWidth(currentField.clientWidth);
      setStateHeight(currentField.clientHeight);
    }
    if (currentPlaceholder) {
      setStateWidthPlaceholder(currentPlaceholder.clientWidth);
    }
  };
  const handleFocus = (e: TEventFocus) => {
    setStateOpen(true);
    setStateFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e?: TEventFocus) => {
    const { current } = inputRef as RefObject<HTMLInputElement>;
    if (current) {
      const { value: valueCurrent } = current;
      const { length: valueLength } = valueCurrent;
      if (!isOpen) {
        setStateOpen(type === 'file' || stateBefore ? true : Boolean(valueLength));
      }
      setStateFocus(false);
      const isValidity = validate(current);
      setStateError(!isValidity.valid);
      setStateDescription(isValidity.message);
      if (onBlur && e) {
        onBlur(e);
      }
    }
  };

  const handleRenderValue = (value: string) => {
    if (Boolean(stateMask)) {
      const valueMask = maskInput({ mask: stateMask, value: value, reverse: maskReverse });
      const { current } = inputRef as RefObject<HTMLInputElement>;
      if (current) {
        setStateValue(valueMask);
      }
    } else {
      setStateValue(value);
    }
  };

  const handleInput = (e: TEventInput) => {
    const { currentTarget } = e;
    const { dataset, value, files } = currentTarget;
    const { type } = dataset;
    const valueRenderType: { [key: string]: () => string } = {
      default: () => value,
      email: () => value.toLocaleLowerCase(),
      number: () => {
        const newValue = Number(value.replace(/[^(^\-?((\d|\.)+)?)]/g, ''));
        if (newValue > max) {
          return String(max);
        }
        if (newValue < min) {
          return String(min);
        }
        if (isNaN(newValue)) {
          return '0';
        }
        return String(newValue);
      },
    };
    const valueRender =
      type && valueRenderType[type] ? valueRenderType[type]() : valueRenderType.default();
    if (files) {
      const filesArray = Array.from(files).map(item => ({
        name: item.name,
        kb: item.size / 1024,
      }));
      setStateFileList(filesArray);
    }

    handleRenderValue(valueRender);

    if (onInput) {
      onInput(e);
    }
    if (onChange) {
      onChange(e as any);
    }
  };
  const handlePasswordToggle = () => {
    if (stateAfterIcon === 'eye') {
      setStateAfterIcon('eye-slash');
      setStateType('text');
    } else {
      setStateAfterIcon('eye');
      setStateType('password');
    }
  };
  const handleFileButton = () => {
    const { current } = inputRef as RefObject<HTMLInputElement>;
    if (current) {
      current.click();
    }
  };
  const handleReloadPlaceholder = () => {
    handleRenderResize();
  };
  const handleClickContinuous = (number: number) => {
    const { current } = inputRef as RefObject<HTMLInputElement>;
    if (current) {
      const event = new Event('input', {
        bubbles: true,
        cancelable: true,
      });
      current.dispatchEvent(event);
      const { value } = current;
      const newValue = Number(value) + number;
      if (newValue <= (max as number) && newValue >= (min as number)) {
        setStateValue(newValue);
      }
    }
  };
  const handleClickClear = () => {
    clearInterval(spinClickInterval);
    clearTimeout(spinClickTimeout);
  };
  const handleClickIncrement = (number: number) => {
    if (!disabled) {
      spinClickTimeout = setTimeout(() => {
        spinClickInterval = setInterval(() => handleClickContinuous(number), 100);
      }, 300);
      handleClickContinuous(number);
    }
  };

  useEffect(() => {
    setStateAfter(after);
  }, [after]);
  useEffect(() => {
    setStateBefore(before);
  }, [before]);
  useEffect(() => {
    setStateOpen(Boolean(isOpen));
  }, [isOpen]);

  useEffect(() => {
    type TMask = 'default' | 'date' | 'tel' | 'time';
    const maskObject: { [key in TMask]: string } = {
      default: dataMask,
      time: '99:99',
      date: '99/99/9999',
      tel: '(99) 9999-99999',
    };
    const maskFomated = maskObject[dataType as TMask] || maskObject.default;
    if (maskFomated) {
      setStateMask(maskFomated);
    }
  }, [dataMask, dataType]);

  useEffect(() => {
    handleRenderValue((value as string) || '');
  }, [dataMask, value]);

  useEffect(() => {
    if (stateValue) {
      handleBlur();
    }
  }, [stateValue]);

  useEffect(() => {
    const { current: currentBefore } = beforeRef;
    if (currentBefore) {
      const width = currentBefore.clientWidth;
      setStateWidthBefore(width);
    }
    handleRenderResize();
    if (stateBefore) {
      setStateOpen(true);
    }
  }, [stateBefore]);

  useEffect(() => {
    if ((stateValue as string)?.length) {
      setStateOpen(true);
    }
    if (dataType === 'password') {
      setStateAfterIcon('eye');
    }
    if (dataType === 'search') {
      setStateAfterIcon('search');
    }
    if (dataType === 'number') {
      setStateAfter(
        <StyleNumberButtons>
          <button
            type="button"
            onMouseDown={() => handleClickIncrement(1)}
            onMouseUp={handleClickClear}
          >
            <Icon name="chevron-top" />
          </button>
          <button
            type="button"
            onMouseDown={() => handleClickIncrement(-1)}
            onMouseUp={handleClickClear}
          >
            <Icon name="chevron-bottom" />
          </button>
        </StyleNumberButtons>
      );
    }
    if (dataType === 'file') {
      setStateOpen(true);
      setStateAfter(
        <StyleBeforeButton icon="upload" onClick={handleFileButton}>
          Selecionar arquivo
        </StyleBeforeButton>
      );
    }
    setStateDescription(description);
    setStateType(type);
  }, [props]);

  useEffect(() => {
    if (stateAfterIcon) {
      const afterFunction: IAfterFunction = {
        password: handlePasswordToggle,
        search: () => {},
      };
      const afterType = dataType as 'password' | 'search';
      setStateAfter(
        <StyleAfterIcon name={stateAfterIcon} strokeWidth={7} onClick={afterFunction[afterType]} />
      );
    }
    const { userAgent } = globalThis.navigator;
    const isSafari = !/chrome\//i.test(userAgent) && /safari\//i.test(userAgent);
    setStateIsSafari(isSafari);
  }, [stateAfterIcon]);

  useEffect(() => {
    const eventsChange = 'mousemove resize'.split(' ');
    eventsChange.forEach(item => {
      globalThis.addEventListener(item, () => handleRenderResize());
    });
  }, []);

  return (
    <StyleWrapper
      isSafari={stateIsSafari}
      isType={stateType}
      isOpen={stateOpen}
      isError={stateError}
      isFocus={stateFocus}
      isWidth={stateWidth}
      isHeight={stateHeight}
      isBefore={Boolean(stateBefore)}
      isAfter={Boolean(stateAfter)}
      isDisabled={disabled || readOnly}
      isWidthPlaceholder={stateWidthPlaceholder}
      isWidthBefore={stateWidthBefore}
    >
      <StyleGlobal />
      <StyleField ref={fieldRef}>
        <StyleBefore ref={beforeRef}>{stateBefore}</StyleBefore>
        <StyleInput
          {...propsCustom}
          type={stateType}
          onFocus={(e: TEventFocus) => handleFocus(e)}
          onBlur={(e: TEventFocus) => handleBlur(e)}
          onInput={(e: TEventInput) => handleInput(e)}
          onChange={(e: TEventInput) => handleInput(e)}
          value={stateType === 'file' ? undefined : (stateValue as string)}
          ref={inputRef}
        />
        <StyleInputFake htmlFor={id}>
          {stateFiles.length ? (
            stateFiles.map((item, i) => (
              <StyleFile title={item.name} key={i}>
                <StyleFileName>{item.name}</StyleFileName>
                <StyleFileKb>{`${item.kb.toFixed(2)} kb`}</StyleFileKb>
              </StyleFile>
            ))
          ) : (
            <StyleFileEmpty>Nenhum arquivo selecionado</StyleFileEmpty>
          )}
        </StyleInputFake>
        <StylePlaceholder onAnimationEnd={handleReloadPlaceholder} ref={placeholderRef}>
          {placeholder}
        </StylePlaceholder>
        <StyleBorder>
          <rect rx="4px" ry="4px" x="1px" y="1px" />
        </StyleBorder>
        <StyleBorderOpen>
          <rect rx="4px" ry="4px" x="1px" y="1px" />
        </StyleBorderOpen>
        <StyleAfter>{stateAfter}</StyleAfter>
      </StyleField>
      {!noDescription && <StyleDescription>{stateDescription}</StyleDescription>}
    </StyleWrapper>
  );
});

export default InputText;
