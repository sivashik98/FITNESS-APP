import { string, bool } from 'yup';

const CASES = {
  required: 'Поле обязательное для заполнения',
  min: (min: number) => `Минимальная длинна символов ${min}`,
  max: (max: number) => `Максимальная длинна символов ${max}`,
  email: 'Введите корректный email',
  onlyNumbersAllowed: 'Поле может состоять только из цифр',
  rulesAcceptRequired: 'Вам нужно обязательно согласиться с правилами',
};

// Сущности которые можно валидировать в приложении (могут пополниться)
export const SHAPES = {
  phone: string()
    .required(CASES.required)
    .min(10, CASES.min(10))
    .max(10, CASES.max(10))
    .matches(/^[0-9]+$/, CASES.onlyNumbersAllowed),
  email: string().required(CASES.required).email(CASES.email).min(5, CASES.min(5)).max(40, CASES.max(40)),
  code: string()
    .required(CASES.required)
    .min(6, CASES.min(6))
    .max(6, CASES.max(6))
    .matches(/^[0-9]+$/, CASES.onlyNumbersAllowed),
  name: string().required(CASES.required).min(4, CASES.min(4)).max(20, CASES.max(20)),
  surname: string().required(CASES.required).min(4, CASES.min(4)).max(20, CASES.max(20)),
  patronymic: string().required(CASES.required).min(4, CASES.min(4)).max(20, CASES.max(20)),
  checkbox: bool().oneOf([true], CASES.rulesAcceptRequired).required(CASES.required),
  birthDate: string().required(CASES.required),
};
