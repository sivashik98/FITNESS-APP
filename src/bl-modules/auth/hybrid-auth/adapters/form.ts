import { useForm } from 'react-hook-form';

import { HYBRID_AUTH_PHONE_VALIDATION, HYBRID_AUTH_EMAIL_VALIDATION } from 'configs/validation/constants';

export type HybridAuthEmailFormFields = {
  email: string;
};
export type HybridAuthPhoneFormFields = {
  phone: string;
};

export const useHybridAuthForm = () => {
  const emailController = useForm<HybridAuthEmailFormFields>({
    resolver: HYBRID_AUTH_EMAIL_VALIDATION,
    defaultValues: { email: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const phoneController = useForm<HybridAuthPhoneFormFields>({
    resolver: HYBRID_AUTH_PHONE_VALIDATION,
    defaultValues: { phone: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return { email: emailController, phone: phoneController };
};
