import { useEffect, useState, ChangeEvent, forwardRef, useRef } from 'react';
import { IInput } from '@/components/input';
import {
  StyleSwitch,
  StyleInput,
  StylePlaceholder,
  StyleButtons,
  StyleCircle,
  StyleIconActive,
  StyleIconInactive,
} from './style';

type TEventInput = ChangeEvent<HTMLInputElement>;

const InputSwitch = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { placeholder, id, checked = false, disabled = false, onChange } = props;
  const inputRef = ref || useRef<HTMLInputElement>(null);
  const [stateChecked, setStateChecked] = useState(checked);
  const [stateDisabled, setStateDisabled] = useState(disabled);
  const handleChange = (e: TEventInput) => {
    setStateChecked(prevState => !prevState);
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    setStateChecked(checked);
  }, [checked]);

  useEffect(() => {
    setStateDisabled(disabled);
  }, [disabled]);

  return (
    <StyleSwitch isChecked={stateChecked} isDisabled={stateDisabled}>
      <StyleInput
        {...props}
        onChange={handleChange}
        checked={stateChecked}
        id={id}
        type="checkbox"
        ref={inputRef}
      />
      <StyleButtons htmlFor={id}>
        <StyleCircle>
          <StyleIconInactive strokeWidth={12} name="times" />
          <StyleIconActive strokeWidth={12} name="check" />
        </StyleCircle>
      </StyleButtons>
      <StylePlaceholder htmlFor={id}>{placeholder}</StylePlaceholder>
    </StyleSwitch>
  );
});

export default InputSwitch;
