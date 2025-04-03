import { UserService } from 'app/api/endpoints';

export const useUserInfoRtkq = () => {
  const { data, isLoading, isFetching, error, isError, isSuccess, refetch } = UserService.useUserQuery();

  return { data, isLoading, isFetching, error, isError, refetch, isSuccess };
};
