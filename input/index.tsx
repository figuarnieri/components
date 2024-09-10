import { useEffect, useState, InputHTMLAttributes, ReactNode, forwardRef, useRef } from 'react';

type TType =
  | 'checkbox'
  | 'email'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'password'
  | 'search'
  | 'switch'
  | 'tel'
  | 'text'
  | 'time'
  | 'currency'
  | 'range'
  | 'number'
  // | 'color'
  // | 'date'
  // | 'datetime'
  // | 'datetime-local'
  // | 'month'
  // | 'week'
  | 'url';

type TTypeViewAs = 'text' | 'checkbox' | 'switch' | 'radio' | 'hidden' | 'range';
type TInputViewAs = {
  [key in TType]: TTypeViewAs;
};
interface ITypeRender {
  [key: string]: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onError?: () => void;
  isOpen?: boolean;
  raw?: boolean;
  equal?: string;
  after?: ReactNode;
  before?: ReactNode;
  beforeWidthAuto?: boolean;
  description?: string;
  type?: TType;
  mask?: string;
  maskReverse?: boolean;
  noDescription?: boolean;
  max?: number;
  min?: number;
  'data-mask'?: string;
  'data-type'?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    raw = false,
    type = 'text',
    description,
    id,
    equal,
    mask,
    // onError,
  } = props;
  const refInput = ref || useRef<HTMLInputElement>(null);
  const propsCustom = { ...props };
  const [stateInput, setStateInput] = useState(<></>);
  const [stateRaw, setStateRaw] = useState(false);
  const [stateTypeAs, setStateTypeAs] = useState('text');
  const [stateId, setStateId] = useState('');

  delete propsCustom.raw;
  delete propsCustom.value;
  delete propsCustom.placeholder;

  useEffect(() => {
    setStateRaw(Boolean(raw));
  }, [raw]);

  useEffect(() => {
    setStateId(id || `id_${Math.floor(Math.random() * (Date.now() - 0 + 1)) + 0}`);
  }, [id]);

  useEffect(() => {
    const inputViewAs: TInputViewAs = {
      text: 'text',
      hidden: 'text',
      email: 'text',
      password: 'text',
      url: 'text',
      file: 'text',
      tel: 'text',
      search: 'text',
      checkbox: 'checkbox',
      switch: 'switch',
      radio: 'radio',
      time: 'text',
      currency: 'text',
      range: 'range',
      number: 'text',
    };
    setStateTypeAs(inputViewAs[type]);
  }, [type]);

  useEffect((): (() => void) => {
    let mounted = `${type}`;
    if (!stateRaw) {
      import(`./type/${stateTypeAs}`).then(e => {
        if (mounted !== `${type}_mounted`) {
          const inputRender: ITypeRender = {
            default: stateTypeAs,
            password: 'password',
            email: 'email',
            url: 'url',
            file: 'file',
          };
          const typeRender = inputRender[type as string] || inputRender.default;
          const componentProps = {
            ...props,
            type: typeRender,
            id: stateId,
            'data-mask': mask,
            'data-equal': equal,
            'data-type': type,
            'data-raw': stateRaw,
            'data-description': description,
          };
          const Component = e.default;
          const render = <Component {...componentProps} ref={refInput} />;
          setStateInput(render);
        }
      });
    }
    if (type === 'hidden') {
      setStateRaw(true);
    }
    return () => (mounted = `${type}_mounted`);
  }, [stateTypeAs, stateId, props]);

  return stateRaw ? <input {...{ ...props, raw: undefined }} ref={refInput} /> : stateInput;
});

export default Input;
