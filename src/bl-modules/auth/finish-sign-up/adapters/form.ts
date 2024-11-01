import { useForm } from 'react-hook-form';

import { BIRTH_DATE_VALIDATION, FULL_NAME_VALIDATION } from 'configs/validation/constants';

export type FullNameFormFields = {
  name: string;
  surname: string;
  patronymic: string;
  checkbox: boolean;
};

export type BirthDateFormFields = {
  birthDate: string;
};

export const useFinishSignUpForm = () => {
  const fullNameController = useForm<FullNameFormFields>({
    resolver: FULL_NAME_VALIDATION,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { name: '', surname: '', patronymic: '', checkbox: false },
  });
  const birthDateController = useForm<BirthDateFormFields>({
    resolver: BIRTH_DATE_VALIDATION,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { birthDate: '' },
  });

  return { fullName: fullNameController, birthDate: birthDateController };
};
