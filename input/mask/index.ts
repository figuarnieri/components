interface IMaskInput {
  mask: string;
  value: string;
  reverse?: boolean;
  minSize?: number;
}

export const maskInput = ({ mask, value = '', reverse }: IMaskInput) => {
  const charType: { [key: string]: RegExp } = {
    A: /[A-z]/,
    '9': /\d/,
    '*': /./,
  };
  let indexRecursive = 0;
  const valueFinal: string[] = [];
  const maskSplit = mask.split('');
  const valueSplit = String(value).split('');

  const fnMask = ({ index, value }: { index: number; value: string }) => {
    const maskCurrent = maskSplit[index];
    const charCurrent = charType[maskCurrent];
    if (maskCurrent === value) {
      valueFinal.push(maskCurrent);
    } else {
      if (charCurrent) {
        if (charCurrent.test(value)) {
          valueFinal.push(value);
        }
      } else {
        if (maskCurrent) {
          valueFinal.push(maskCurrent);
          if (charType.A.test(value) || charType['9'].test(value)) {
            indexRecursive++;
          }
          fnMask({ index: index + 1, value });
        }
      }
    }
  };
  const fnMaskReverse = ({ index, value }: { index: number; value: string }) => {
    const maskNext = maskSplit[maskSplit.length - index - 2];
    const indexReverse = maskNext === value ? ++indexRecursive : indexRecursive;
    const maskCurrent = maskSplit[maskSplit.length - index - 1 + indexReverse];
    const charCurrent = charType[maskCurrent];
    if (new RegExp(charCurrent).test(value)) {
      if (charCurrent) {
        valueFinal.unshift(value);
      } else {
        valueFinal.unshift(maskCurrent);
        fnMaskReverse({ index: index + 1, value });
      }
    }
  };
  maskSplit.forEach((_, i) => {
    if (reverse) {
      const limitValue = valueSplit[valueSplit.length - 1 - i];
      if (limitValue) {
        fnMaskReverse({ index: i, value: limitValue });
      }
    } else {
      const limitValue = valueSplit[i];
      if (limitValue) {
        fnMask({ index: i + indexRecursive, value: limitValue });
      }
    }
  });

  return valueFinal.join('');
};

export default maskInput;
