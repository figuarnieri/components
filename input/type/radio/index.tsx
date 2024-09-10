import { forwardRef, useRef } from 'react';
import { IInput } from '@/components/input';
import {
  StyleRadio,
  StyleInput,
  StyleCheck,
  StyleCheckSvg,
  StyleCheckSvgBorder,
  StylePlaceholder,
} from './style';

const InputCheckbox = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { placeholder, id, checked = false, disabled = false } = props;
  const inputRef = ref || useRef<HTMLInputElement>(null);
  return (
    <StyleRadio isDisabled={disabled}>
      <StyleInput
        {...props}
        checked={undefined}
        defaultChecked={checked}
        id={id}
        type="radio"
        ref={inputRef}
      />
      <StyleCheck htmlFor={id} />
      <StyleCheckSvg>
        <rect rx="8px" ry="8px" x="1px" y="1px" />
      </StyleCheckSvg>
      <StyleCheckSvgBorder>
        <rect rx="8px" ry="8px" x="1px" y="1px" />
        <circle r="3px" />
      </StyleCheckSvgBorder>
      <StylePlaceholder htmlFor={id}>{placeholder}</StylePlaceholder>
    </StyleRadio>
  );
});

export default InputCheckbox;
