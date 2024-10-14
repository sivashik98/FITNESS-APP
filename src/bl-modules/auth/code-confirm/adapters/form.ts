import { useForm } from 'react-hook-form';

import { CODE_CONFIRM_VALIDATION } from 'tools/services/validation/constants';

export type CodeConfirmFormFields = {
  code: string;
};

export const useCodeConfirmForm = () => {
  const controller = useForm<CodeConfirmFormFields>({
    resolver: CODE_CONFIRM_VALIDATION,
    defaultValues: { code: '' },
  });

  return { code: controller };
};
