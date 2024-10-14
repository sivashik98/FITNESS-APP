import { useForm } from 'react-hook-form';

import { SIGN_UP_WITH_EMAIL_VALIDATION, SIGN_UP_WITH_PHONE_VALIDATION } from 'tools/services/validation/constants';
import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';

export type SignUpWithEmailFormFields = {
  [SignUpTypes.EMAIL]: string;
};
export type SignUpWithPhoneFormFields = {
  [SignUpTypes.PHONE]: string;
};

export const useSignUpForm = () => {
  const emailController = useForm<SignUpWithEmailFormFields>({
    resolver: SIGN_UP_WITH_EMAIL_VALIDATION,
    defaultValues: { [SignUpTypes.EMAIL]: '' },
  });
  const phoneController = useForm<SignUpWithPhoneFormFields>({
    resolver: SIGN_UP_WITH_PHONE_VALIDATION,
    defaultValues: { [SignUpTypes.PHONE]: '' },
  });

  return { [SignUpTypes.EMAIL]: emailController, [SignUpTypes.PHONE]: phoneController };
};
