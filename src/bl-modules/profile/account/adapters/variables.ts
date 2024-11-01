import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';

export const useAccountVariables = (localState: ReturnType<typeof useAccountLocalState>) => {
  const activeGender = localState.activeGender;

  return { activeGender };
};
