import { UserService } from 'app/api/endpoints';

export const useAccountRtkq = () => {
  const [update, { isError, error, data, isLoading }] = UserService.useUpdateUserInfoMutation();

  return { update, isError, error, data, isLoading };
};
