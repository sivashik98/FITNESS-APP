import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import { SHAPES } from './config';
import { CodeConfirmFormFields } from 'bl-modules/auth/code-confirm/adapters/form';
import { FullNameFormFields } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { AccountFormFields } from 'bl-modules/profile/account/adapters/form';
import { HybridAuthEmailFormFields, HybridAuthPhoneFormFields } from 'bl-modules/auth/hybrid-auth/adapters/form';

// Константы валидаций для react hook form
export const HYBRID_AUTH_EMAIL_VALIDATION = yupResolver<HybridAuthEmailFormFields>(
  object({
    email: SHAPES.email,
  })
);

export const HYBRID_AUTH_PHONE_VALIDATION = yupResolver<HybridAuthPhoneFormFields>(
  object({
    phone: SHAPES.phone,
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

export const ACCOUNT_VALIDATION = yupResolver<AccountFormFields>(
  object({
    email: SHAPES.email,
    phone: SHAPES.phone,
    name: SHAPES.name,
    surname: SHAPES.surname,
    patronymic: SHAPES.patronymic,
  })
);
