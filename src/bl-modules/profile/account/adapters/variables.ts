import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export const useAccountVariables = (localState: ReturnType<typeof useAccountLocalState>, userInfoAdapter: ReturnType<typeof useUserInfoAdapter>) => {
  const activeGender = localState.activeGender;
  const formattedPhone = userInfoAdapter.variables.formattedPhone;
  const email = userInfoAdapter.variables.email;
  const isLoading = userInfoAdapter.variables.isLoading;

  return { activeGender, formattedPhone, email, isLoading };
};
