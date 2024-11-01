import { AuthService } from 'app/api/endpoints';

export const useCodeConfirmRtkq = () => {
  const [submit, { isLoading, data }] = AuthService.useEmailCodeConfirmMutation();

  return { submit, isLoading, data };
};
