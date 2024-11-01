import { useForm } from 'react-hook-form';

import { ACCOUNT_VALIDATION } from 'configs/validation/constants';

export type AccountFormFields = {
  surname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  birthDate: string;
};

export const useAccountForm = () => {
  const controller = useForm<AccountFormFields>({
    resolver: ACCOUNT_VALIDATION,
    defaultValues: {
      surname: 'Шевченко',
      email: 'shevchenko@gmail.com',
      name: 'Алина',
      patronymic: 'Николаевна',
      phone: '+7 909 375-37-44',
      birthDate: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return { account: controller };
};
