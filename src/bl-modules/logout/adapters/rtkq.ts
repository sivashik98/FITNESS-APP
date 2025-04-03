import { AuthService } from 'app/api/endpoints';

export const useLogoutRtkq = () => {
  const [logout, { isLoading, error, isError }] = AuthService.useLogoutMutation();

  return { logout, isLoading, error, isError };
};
