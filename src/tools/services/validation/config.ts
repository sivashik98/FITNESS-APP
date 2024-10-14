import { string, boolean, ref, bool } from 'yup';

// Сущности которые можно валидировать в приложении (могут пополниться)
export const SHAPES = {
  phone: string().required().min(2).max(5),
  email: string().required().email().min(2).max(30),
  code: string()
    .required()
    .min(6)
    .max(6)
    .matches(/^[0-9]+$/, 'Код может состоять только из цифр'),
  // .matches(/^[a-zA-Z0-9$%#.@_]*$/, 'validation.emailMatches'),
  password: string()
    .required()
    .min(6)
    .max(32)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*()]).+$/, 'validation.passwordMatches'),
  confirmPassword: string()
    .required()
    .oneOf([ref('password')]),
  name: string().required().min(6),
  surname: string().required().min(6),
  patronymic: string().required().min(6),
  checkbox: bool().oneOf([true], 'accept is required'),
};
