import { useUserInfoRtkq } from 'bl-modules/user/user-info/adapters/rtkq';

export const useUserInfoHandlers = (rtkq: ReturnType<typeof useUserInfoRtkq>) => {
  const onRefetchUser = rtkq.refetch;

  return {
    onRefetchUser,
  };
};
