import { useAppLaunchEffects } from 'bl-modules/app-launch/adapters/effects';
import { useAppLaunchLocalState } from 'bl-modules/app-launch/adapters/local-state';
import { useAppLaunchVariables } from 'bl-modules/app-launch/adapters/variables';

export const useAppLaunchAdapter = () => {
  const localState = useAppLaunchLocalState();
  const variables = useAppLaunchVariables(localState);

  useAppLaunchEffects(localState);

  return { variables };
};
