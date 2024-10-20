import { useForm } from 'react-hook-form';

import { FULL_NAME_VALIDATION } from 'configs/validation/constants';

export type FullNameFormFields = {
  name: string;
  surname: string;
  patronymic: string;
  checkbox: boolean;
};

export const useFinishSignUpForm = () => {
  const controller = useForm<FullNameFormFields>({
    resolver: FULL_NAME_VALIDATION,
    defaultValues: { name: '', surname: '', patronymic: '', checkbox: false },
  });

  return { fullName: controller };
};
