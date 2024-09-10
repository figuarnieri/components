import { forwardRef, useRef, ChangeEvent, useState, useEffect, RefObject } from 'react';
import { IInput } from '@/components/input';
import {
  StyleWrapper,
  StyleHeader,
  StylePlaceholder,
  StyleValue,
  StyleInput,
  StyleInputWrapper,
  StyleRange,
  StyleRangeFill,
  StyleRangeDot,
} from './style';

const InputRange = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { placeholder, noDescription, value = '', min, max, onChange } = props;
  const [stateValue, setStateValue] = useState(value as number);
  const [stateValueMin, setStateValueMin] = useState(min as number);
  const [stateValueMax, setStateValueMax] = useState(max as number);
  const [statePercent, setStatePercent] = useState(0);
  const inputRef = ref || useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    const { value } = currentTarget;
    if (value) {
      setStateValue(Number(value));
    }
    if (onChange) {
      onChange(e);
    }
  };
  const propsCustom = { ...props };

  delete propsCustom.value;
  delete propsCustom.defaultValue;
  useEffect(() => {
    const diff = Math.abs(stateValueMax - stateValueMin);
    const valuePercent = Math.abs((stateValueMin - stateValue) / diff) * 100;
    setStatePercent(valuePercent);
  }, [stateValue, stateValueMin, stateValueMax]);

  useEffect(() => setStateValueMin(Number(min)), [min]);

  useEffect(() => setStateValueMax(Number(max)), [max]);

  useEffect(() => setStateValue(Number(value)), [value]);

  useEffect(() => {
    const { current } = inputRef as RefObject<HTMLInputElement>;
    if (current) {
      setStateValue(Number(current.value));
      setStateValueMin(Number(current.min));
      setStateValueMax(Number(current.max));
    }
  }, []);

  return (
    <StyleWrapper>
      <StyleHeader>
        <StylePlaceholder>{placeholder}</StylePlaceholder>
        <StyleValue>{!noDescription && stateValue}</StyleValue>
      </StyleHeader>
      <StyleInputWrapper>
        <StyleRange>
          <StyleRangeFill style={{ left: `${statePercent}%` }} />
          <StyleRangeDot
            style={{
              left: `${statePercent}%`,
              transform: `translateX(-${statePercent}%)`,
            }}
          />
        </StyleRange>
        <StyleInput
          {...propsCustom}
          type="range"
          ref={inputRef}
          onChange={handleChange}
          value={stateValue}
        />
      </StyleInputWrapper>
    </StyleWrapper>
  );
});

export default InputRange;
