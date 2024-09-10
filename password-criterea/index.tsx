import { useEffect, useState } from 'react';
import { StyleWrapper, StyleItem } from './style';

type TCritereasKey = 'upper' | 'lower' | 'number' | 'special' | 'minChar';

type TCritereas = {
  [key in TCritereasKey]: { active: boolean, regex: RegExp }
}

interface IPasswordCriterea {
  input: string;
}

const PasswordCriterea = (props: IPasswordCriterea) => {
  const { input } = props;
  const [stateLoadedInputs, setStateLoadedInputs] = useState(false);
  let intervalInput: number;
  let intervalArray: number[] = [];
  const [stateActive, setStateActive] = useState<TCritereas>({
    upper: { active: false, regex: /[A-Z]/ },
    lower: { active: false, regex: /[a-z]/ },
    number: { active: false, regex: /[0-9]/ },
    special: { active: false, regex: /[^\w\s]|_/ },
    minChar: { active: false, regex: /.{8,}/ },
  });
  useEffect(() => {
    if (stateLoadedInputs) {
      setTimeout(() => {
        const inputElement = document.querySelector<HTMLInputElement>(input);
        if (inputElement) {
          inputElement.addEventListener('input', () => {
            const { value } = inputElement;
            const critereaArray = Object.entries(stateActive);
            const critereaObject: any = {};
            critereaArray.forEach(item => {
              const [itemKey, itemValue] = item;
              const { regex } = itemValue;
              critereaObject[itemKey] = {
                active: regex.test(value),
                regex,
              };
            });
            setStateActive(critereaObject);
          });
        }
      }, 1);
    }
  }, [stateLoadedInputs]);
  useEffect(() => {
    intervalInput = setInterval(() => {
      const inputs = document.querySelectorAll('input, select, text');
      const firstItem = intervalArray[0];
      if (firstItem === inputs.length) {
        intervalArray.push(inputs.length);
      } else {
        intervalArray = [inputs.length];
      }
      if (intervalArray.length === 10) {
        setStateLoadedInputs(true);
        clearInterval(intervalInput);
      }
    }, 10);
  }, []);
  return (
    <StyleWrapper>
      <StyleItem active={stateActive.upper.active}>ABC</StyleItem>
      <StyleItem active={stateActive.lower.active}>abc</StyleItem>
      <StyleItem active={stateActive.number.active}>123</StyleItem>
      <StyleItem active={stateActive.special.active}>!@#</StyleItem>
      <StyleItem active={stateActive.minChar.active}>8+</StyleItem>
    </StyleWrapper>
  );
};

export default PasswordCriterea;
