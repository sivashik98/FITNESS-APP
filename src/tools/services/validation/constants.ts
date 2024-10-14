import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import { SHAPES } from 'tools/services/validation/config';
import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';
import { SignUpWithPhoneFormFields, SignUpWithEmailFormFields } from 'bl-modules/auth/sign-up/adapters/form';
import { CodeConfirmFormFields } from 'bl-modules/auth/code-confirm/adapters/form';
import { FullNameFormFields } from 'bl-modules/auth/finish-sign-up/adapters/form';

// Константы валидаций для react hook form
export const SIGN_UP_WITH_EMAIL_VALIDATION = yupResolver<SignUpWithEmailFormFields>(
  object({
    [SignUpTypes.EMAIL]: SHAPES.email,
  })
);

export const SIGN_UP_WITH_PHONE_VALIDATION = yupResolver<SignUpWithPhoneFormFields>(
  object({
    [SignUpTypes.PHONE]: SHAPES.phone,
  })
);

export const CODE_CONFIRM_VALIDATION = yupResolver<CodeConfirmFormFields>(
  object({
    code: SHAPES.code,
  })
);

export const FULL_NAME_VALIDATION = yupResolver<FullNameFormFields>(
  object({
    name: SHAPES.name,
    surname: SHAPES.surname,
    patronymic: SHAPES.patronymic,
    checkbox: SHAPES.checkbox,
  })
);
