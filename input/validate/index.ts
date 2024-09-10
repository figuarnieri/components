export interface IValidate {
  valid: boolean;
  message: string;
  element: HTMLInputElement;
}

export interface IValidCondition {
  condition: boolean;
  message: string;
}

export interface IAttributes {
  type: string;
  required: boolean;
  value: string | number;
  max: string;
  min: string;
  maxLength: number;
  minLength: number;
  accept: string;
  pattern: string;
  dataEqual: string;
  dataType: string;
  dataDescription: string;
}

const validate = (props: HTMLInputElement): IValidate => {
  const {
    required = false,
    value = '',
    // max = '',
    // min = '',
    maxLength = -1,
    minLength = -1,
    // accept = '',
    // pattern = '',
    dataset,
    disabled,
    // 'data-equal': dataEqual,
    // 'data-type': dataType,
    // dataDescription,
  } = props as HTMLInputElement;
  const {
    equal: dataEqual = '',
    type: dataType = 'text',
    description: dataDescription = '',
  } = dataset;

  // sempre retorne true para ser válido
  let valid: boolean = true;
  let validMessage = '';
  const inputEqual = (Boolean(dataEqual) && document.querySelector(dataEqual)) as HTMLInputElement;

  const validCondition = ({ condition, message }: IValidCondition) => {
    if (valid && condition && (required || Boolean(value.length))) {
      validMessage = message;
      valid = false;
    }
  };

  if (!disabled) {
    validCondition({
      condition: required && !Boolean(value.length),
      message: 'Preencha o campo obrigatório',
    });
    validCondition({
      condition: maxLength > -1 && Number(maxLength) < value.length,
      message: `Digite no mínimo ${maxLength} caracteres`,
    });
    validCondition({
      condition: minLength > -1 && !(Number(minLength) < value.length),
      message: `Digite no mínimo ${minLength} caracteres`,
    });
    // validCondition({
    //   condition: type === 'range' && !Boolean(max) && !(Number(max) > value.length),
    //   message: `Digite um número menor que ${max}`,
    // });
    // validCondition({
    //   condition: type === 'range' && !Boolean(min) && !(Number(min) > value.length),
    //   message: `Digite um número maior que ${min}`,
    // });
    // validCondition({
    //   condition: type === 'color' && !/^#[a-fA-F0-9]{3, 6}$/.test(value),
    //   message: 'Digite uma cor válida',
    // });
    validCondition({
      condition: dataType === 'email' && !/^[\w\.\-+]+@(\.?[\w\-]+){1,5}(\.[\w]{2,})$/.test(value),
      message: 'Digite um e-mail válido',
    });
    // validCondition({
    //   condition: type === 'number' && Number(value).toString() === 'NaN',
    //   message: 'Digite um número válido',
    // });
    // validCondition({
    //   condition: type === 'tel' && !/^\(?\d{2}?\)?\s?\d{4}-?(\d{1})?-?\d{4}$/.test(value),
    //   message: 'Digite um telefone válido',
    // });
    validCondition({
      condition:
        dataType === 'password' &&
        !/(?=^.{8,}$)((?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*\d{1,})(?=.*[\W]{1,})(?!.*\s{1,}))^.*$/.test(
          value
        ),
      message: 'Digite todos os critérios de senha válidos',
    });
    // validCondition({
    //   condition:
    //     type === 'url' &&
    //     !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
    //       value
    //     ),
    //   message: 'Digite uma url válida (ex.: https://www.betteryoo.com.br)',
    // });
    // validCondition({
    //   condition: datasetType === 'date' && value.length !== 10,
    //   message: 'Digite uma data válida',
    // });
    validCondition({
      condition: Boolean(inputEqual) && inputEqual.value !== value,
      message: `Digite um valor igual ao campo "${inputEqual.nextElementSibling?.nextElementSibling?.textContent}"`,
    });
  }

  return {
    element: props,
    valid,
    message: validMessage || dataDescription,
  };
};

export default validate;
