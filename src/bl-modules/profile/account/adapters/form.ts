import { useForm } from 'react-hook-form';

import { ACCOUNT_VALIDATION } from 'configs/validation/constants';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export type AccountFormFields = {
  surname: string;
  name: string;
  patronymic: string;
  birthday: Date | null;
};

export const useAccountForm = (userInfoAdapter: ReturnType<typeof useUserInfoAdapter>) => {
  const controller = useForm<AccountFormFields>({
    resolver: ACCOUNT_VALIDATION,
    defaultValues: {
      surname: userInfoAdapter.variables.user?.surname ?? '',
      name: userInfoAdapter.variables.user?.name ?? '',
      patronymic: userInfoAdapter.variables.user?.patronymic ?? '',
      birthday: userInfoAdapter.variables.user?.birthday ? new Date(userInfoAdapter.variables.user?.birthday) : null,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return { account: controller };
};
