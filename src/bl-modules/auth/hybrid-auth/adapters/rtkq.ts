import { AuthService } from 'app/api/endpoints';

export const useHybridAuthRtkq = () => {
  const [onSubmitEmail, { isLoading: isLoadingEmail, isError: isErrorEmail, error: errorEmail }] = AuthService.useEmailHybridAuthMutation();
  const [onSubmitPhone, { isLoading: isLoadingPhone, isError: isErrorPhone, error: errorPhone }] = AuthService.usePhoneHybridAuthMutation();

  return { onSubmitEmail, onSubmitPhone, isLoadingEmail, isLoadingPhone, isErrorEmail, errorEmail, isErrorPhone, errorPhone };
};
