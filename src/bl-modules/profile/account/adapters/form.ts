import { useForm } from 'react-hook-form';

import { ACCOUNT_VALIDATION } from 'configs/validation/constants';

export type AccountFormFields = {
  surname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
};

export const useAccountForm = () => {
  const controller = useForm<AccountFormFields>({
    resolver: ACCOUNT_VALIDATION,
    defaultValues: { surname: 'Алинмова', email: 'Мила', name: 'Николаевна', patronymic: '', phone: '+7 909 375-37-44' },
  });

  return { account: controller };
};
