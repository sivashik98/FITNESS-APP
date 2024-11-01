import { AuthService } from 'app/api/endpoints';
import { useAppActions } from 'app/store/actions';

export const useHybridAuthRtkq = () => {
  const [onSubmitEmail, { isLoading: isLoadingEmail, isError: isErrorEmail, error: errorEmail }] = AuthService.useEmailHybridAuthMutation();
  const [onSubmitPhone, { isLoading: isLoadingPhone, isError: isErrorPhone, error: errorPhone }] = AuthService.usePhoneHybridAuthMutation();
  const { userInfoActions } = useAppActions();

  return { onSubmitEmail, onSubmitPhone, isLoadingEmail, isLoadingPhone, isErrorEmail, errorEmail, isErrorPhone, errorPhone, userInfoActions };
};
