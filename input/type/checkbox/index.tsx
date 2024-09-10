import { useEffect, useState, ChangeEvent, forwardRef, useRef } from 'react';
import { IInput } from '@/components/input';
import {
  StyleSwitch,
  StyleInput,
  StyleCheck,
  StyleCheckSvg,
  StyleCheckSvgBorder,
  StylePlaceholder,
} from './style';

type TEventInput = ChangeEvent<HTMLInputElement>;

const InputCheckbox = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { placeholder, id, checked = false, onChange, disabled = false } = props;
  const inputRef = ref || useRef<HTMLInputElement>(null);
  const [stateChecked, setStateChecked] = useState(checked);
  const handleChange = (e: TEventInput) => {
    setStateChecked(prevState => !prevState);
    if (onChange) {
      onChange(e);
    }
  };
  useEffect(() => {
    setStateChecked(checked);
  }, [checked]);
  return (
    <StyleSwitch isChecked={stateChecked} isDisabled={disabled}>
      <StyleInput
        {...props}
        onChange={handleChange}
        checked={stateChecked}
        id={id}
        type="checkbox"
        ref={inputRef}
      />
      <StyleCheck htmlFor={id} />
      <StyleCheckSvg>
        <rect rx="4px" ry="4px" x="1px" y="1px" />
      </StyleCheckSvg>
      <StyleCheckSvgBorder>
        <rect rx="4px" ry="4px" x="1px" y="1px" />
        <polyline points="5 8 7 10 11 6" />
      </StyleCheckSvgBorder>
      <StylePlaceholder htmlFor={id}>{placeholder}</StylePlaceholder>
    </StyleSwitch>
  );
});

export default InputCheckbox;
