import {
  SelectHTMLAttributes,
  forwardRef,
  MouseEvent,
  FocusEvent,
  FormEvent,
  RefObject,
  useEffect,
  ReactNode,
  useState,
  useRef,
  FC,
} from 'react';
import Input from '@/components/input';
import normalize from '@/components/utils/normalize';
import {
  StyleSelectRaw,
  StyleContainer,
  StyleOptGroup,
  StyleOptionItem,
  StyleOptions,
  StyleChevron,
  StyleBefore,
  StyleBeforeText,
  StyleBeforeDelete,
} from './style';

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  description?: string;
  noDescription?: boolean;
  valueInput?: string;
  onInput?: (e: FormEvent<HTMLSelectElement>) => void;
  addNewItem?: boolean;
  maxItems?: number;
}

interface IOptionsListOption {
  value: string;
  description: string;
  html: string;
  disabled: boolean;
  element: ReactNode;
}

interface IOptionsList {
  option: IOptionsListOption[];
  label: ReactNode;
}

interface IOptionsBefore {
  description: string;
  value: string;
}

interface IOptionsLoader {
  stateValue: string;
  stateSetValue: any;
  stateList: any[];
  stateLoaded: boolean;
  empty?: ReactNode;
}

export const OptionsLoader: FC<IOptionsLoader> = props => {
  const { stateValue, stateList, stateLoaded, empty = 'Nenhum resultado encontrado' } = props;
  return (
    <>
      {stateValue.length ? (
        stateLoaded ? (
          stateList.length ? (
            stateList.map(item => (
              <option key={item.id} value={item.id}>
                {item.description}
              </option>
            ))
          ) : (
            <option>{empty}</option>
          )
        ) : (
          <option>Carregando...</option>
        )
      ) : null}
    </>
  );
};

const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
  const {
    noDescription,
    description,
    placeholder,
    addNewItem,
    valueInput,
    children,
    multiple,
    value,
    name,
    onChange,
    onInput,
    onFocus,
    onBlur,
    maxItems = 8,
    disabled,
  } = props;
  const [stateOptionsOpen, setStateOptionsOpen] = useState(false);
  const [stateOptionsClick, setStateOptionsClick] = useState(false);
  const [stateOptionsInitial, setStateOptionsInitial] = useState<IOptionsList[]>([]);
  const [stateOptions, setStateOptions] = useState<IOptionsList[]>([]);
  const [stateOptionsBefore, setStateOptionsBefore] = useState<IOptionsBefore[]>([]);
  const [stateInputValue, setStateInputValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const selectRawRef = (ref || useRef<HTMLSelectElement>(null)) as RefObject<HTMLSelectElement>;
  const inputRef = useRef<HTMLInputElement>(null);
  const valueInputDate = `${valueInput}_${Date.now()}`;
  const propsCustom: any = {};
  Object.entries({ ...props }).forEach(item => {
    const [key, value] = item;
    if (/^(data|aria)\-/.test(key)) {
      propsCustom[key] = value;
    }
  });

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setStateOptionsOpen(true);
    setStateOptions([...stateOptionsInitial]);
    if (onFocus) {
      onFocus(e as any);
    }
  };
  const handleInputInput = (e: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    const { value } = currentTarget;
    const valueNormalize = normalize(value);
    const options = stateOptionsInitial.map(item => {
      const optionList = item.option
        .map(subitem => {
          if (normalize(subitem.description).indexOf(valueNormalize) !== -1) {
            return subitem;
          }
        })
        .filter(subitem => subitem);
      return { label: optionList.length ? item.label : '', option: optionList };
    }) as IOptionsList[];
    setStateOptions(options);
    setStateInputValue(value);
    if (onInput) {
      onInput(e as any);
    }
  };
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setStateOptionsOpen(false);
    if (onBlur) {
      onBlur(e as any);
    }
  };
  const handleClickOption = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const { current: currentSelectRaw } = selectRawRef;
    const { dataset } = currentTarget;
    const { value, text } = dataset;
    const event = new Event('change');
    if (currentSelectRaw) {
      currentSelectRaw.addEventListener('change', e => onChange && onChange(e as any), {
        once: true,
      });
      currentSelectRaw.dispatchEvent(event);
      setTimeout(() => {
        const valueOption = value ?? '';
        if (multiple || addNewItem) {
          if (value) {
            setStateOptionsBefore(prevState => [
              ...prevState,
              { description: text ?? '', value: valueOption },
            ]);
            setStateInputValue('');
            setStateOptions([...stateOptionsInitial]);
          }
        } else {
          // currentSelectRaw.value = valueOption;
          setStateInputValue(text ?? '');
          setStateValue(valueOption);
        }
      }, 60);
    }
  };
  const handleClickDelete = (item: IOptionsBefore) => {
    setStateOptionsBefore(prevState => prevState.filter(subitem => subitem.value !== item.value));
  };
  const handleTransitionEndOptions = () => {
    setStateOptionsClick(stateOptionsOpen);
  };
  const handleRenderOption = (item: HTMLOptionElement, i: number) => {
    return (
      <StyleOptionItem
        isDisabled={item.disabled}
        data-value={item.value}
        data-text={item.textContent}
        key={`${i}_${item.value}`}
        onClick={handleClickOption}
      >
        {item.textContent}
      </StyleOptionItem>
    );
  };

  useEffect(() => {
    const { current: currentInputRef } = inputRef;
    if (!stateInputValue && currentInputRef) {
      setTimeout(() => {
        currentInputRef.focus();
        currentInputRef.blur();
      }, 10);
    }
  }, [stateInputValue]);
  useEffect(() => {
    const { current: currentSelectRaw } = selectRawRef;
    if (currentSelectRaw) {
      currentSelectRaw.value = value as string;
    }
    setStateValue(value as string);
  }, [value]);
  useEffect(() => {
    const { current: currentSelectRaw } = selectRawRef;
    if (currentSelectRaw) {
      const childrenGroup: IOptionsList[] = [];
      [...(currentSelectRaw.children as any)].forEach((item, i) => {
        if (item.tagName === 'OPTION') {
          childrenGroup.push({
            label: '',
            option: [
              {
                value: item.value,
                html: item.innerHTML,
                description: item.textContent,
                disabled: item.disabled,
                element: handleRenderOption(item, i),
              },
            ],
          });
        }
        if (item.tagName === 'OPTGROUP') {
          childrenGroup.push({
            label: <StyleOptGroup>{item.label}</StyleOptGroup>,
            option: [...item.querySelectorAll('option')].map((subitem, j) => ({
              value: subitem.value,
              html: subitem.innerHTML,
              description: subitem.textContent,
              disabled: subitem.disabled,
              element: handleRenderOption(subitem, j),
            })),
          });
        }
      });
      setStateOptionsInitial(childrenGroup);
      setStateOptions(childrenGroup);
      if (multiple) {
        // const optionSelected = String(value)?.split(',');
        // setStateOptionsBefore([]);
        // currentSelectRaw.querySelectorAll('option').forEach(item => {
        //   if (optionSelected.includes(item.value)) {
        //     setStateOptionsBefore(prevState => [
        //       ...prevState,
        //       { description: item.textContent ?? '', value: item.value },
        //     ]);
        //   }
        // });
      } else {
        const optionSelected = currentSelectRaw.selectedOptions[0];
        setStateInputValue(optionSelected?.textContent ?? '');
      }
    }
  }, [children]);
  useEffect(() => {
    if (valueInput) {
      setStateInputValue(valueInput ?? '');
    }
  }, [valueInputDate]);
  useEffect(() => {
    const { current: currentSelectRaw } = selectRawRef;
    const { current: currentInputRef } = inputRef;
    if (currentSelectRaw && currentInputRef) {
      currentSelectRaw.querySelectorAll('option').forEach(subitem => (subitem.selected = false));
      stateOptionsBefore.forEach(item => {
        currentSelectRaw.querySelectorAll('option').forEach(subitem => {
          if (subitem.value === item.value) {
            subitem.selected = true;
          }
        });
      });
      if (stateOptionsBefore.length === 0) {
        setTimeout(() => {
          currentInputRef.focus();
          currentInputRef.blur();
        }, 1);
      }
    }
  }, [stateOptionsBefore]);
  const optiomItemLabel = stateOptions.map((item, i) => {
    const itemsOptions = item.option
      .map(subitem => {
        const optionsBefore = stateOptionsBefore.map(before => {
          if (before.value === subitem.value) {
            return before.value;
          }
        });
        if (!optionsBefore.includes(subitem.value) || optionsBefore.length === 0) {
          return subitem.element;
        }
      })
      .filter(subitem => subitem);
    return itemsOptions.length ? (
      <li key={i}>
        {item.label}
        {itemsOptions}
      </li>
    ) : null;
  });

  return (
    <StyleContainer data-value={stateValue} isOpen={stateOptionsOpen} noDescription={noDescription}>
      <StyleSelectRaw
        multiple={multiple}
        ref={selectRawRef}
        value={
          multiple || addNewItem
            ? stateOptionsBefore.map(item =>
                isNaN(Number(item.value)) ? item.value : Number(item.value)
              )
            : stateValue
        }
        onChange={() => {}}
      >
        {children}
      </StyleSelectRaw>
      <Input
        {...propsCustom}
        type="hidden"
        name={name}
        defaultValue={
          multiple || addNewItem
            ? JSON.stringify(
                stateOptionsBefore.map(item =>
                  isNaN(Number(item.value)) ? item.value : Number(item.value)
                )
              )
            : stateValue
        }
      />
      <Input
        ref={inputRef}
        disabled={disabled}
        placeholder={placeholder}
        description={description}
        noDescription={noDescription}
        value={stateInputValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onInputCapture={handleInputInput}
        before={
          stateOptionsBefore.length
            ? stateOptionsBefore.map(item => (
                <StyleBefore key={item.value}>
                  <StyleBeforeText>{item.description}</StyleBeforeText>
                  <StyleBeforeDelete name="times" onClick={() => handleClickDelete(item)} />
                </StyleBefore>
              ))
            : null
        }
        after={<StyleChevron name="chevron-bottom" />}
      />
      <StyleOptions
        isClick={stateOptionsClick}
        isMaxItems={maxItems}
        onTransitionEnd={handleTransitionEndOptions}
      >
        {optiomItemLabel}
        {optiomItemLabel.filter(item => item).length < 1 && addNewItem && stateInputValue.length ? (
          <StyleOptionItem
            isDisabled={false}
            data-value={stateInputValue}
            data-text={stateInputValue}
            onClick={handleClickOption}
          >
            Adicionar novo item "{stateInputValue}"
          </StyleOptionItem>
        ) : null}
      </StyleOptions>
    </StyleContainer>
  );
});

export default Select;
