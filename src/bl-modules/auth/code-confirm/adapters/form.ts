import { useForm } from 'react-hook-form';

import { CODE_CONFIRM_VALIDATION } from 'configs/validation/constants';

export type CodeConfirmFormFields = {
  code: string;
};

export const useCodeConfirmForm = () => {
  const controller = useForm<CodeConfirmFormFields>({
    resolver: CODE_CONFIRM_VALIDATION,
    defaultValues: { code: '' },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { code: controller };
};
