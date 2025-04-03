import { useLogoutRtkq } from 'bl-modules/logout/adapters/rtkq';

export const useLogoutVariables = (rtkq: ReturnType<typeof useLogoutRtkq>) => {
  const isLoading = rtkq.isLoading;

  return { isLoading };
};
