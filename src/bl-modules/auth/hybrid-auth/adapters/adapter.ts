import { useHybridAuthHandlers } from 'bl-modules/auth/hybrid-auth/adapters/handlers';
import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthVariables } from 'bl-modules/auth/hybrid-auth/adapters/variables';
import { useHybridAuthRtkq } from 'bl-modules/auth/hybrid-auth/adapters/rtkq';
import { useHybridAuthNavigation } from 'bl-modules/auth/hybrid-auth/adapters/navigation';

export const useHybridAuthAdapter = () => {
  const navigation = useHybridAuthNavigation();
  const rtkq = useHybridAuthRtkq();
  const localState = useHybridAuthLocalState(navigation);
  const form = useHybridAuthForm();
  const handlers = useHybridAuthHandlers(localState, rtkq, navigation, form);
  const variables = useHybridAuthVariables(localState, rtkq, form, navigation);

  return { variables, handlers, form };
};
