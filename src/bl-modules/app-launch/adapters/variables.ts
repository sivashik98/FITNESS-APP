import { useAppLaunchLocalState } from 'bl-modules/app-launch/adapters/local-state';

export const useAppLaunchVariables = (localState: ReturnType<typeof useAppLaunchLocalState>) => {
  const initialScreen = localState.initialScreen;

  return { initialScreen };
};
