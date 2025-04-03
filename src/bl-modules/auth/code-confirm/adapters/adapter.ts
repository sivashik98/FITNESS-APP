import { useCodeConfirmForm } from 'bl-modules/auth/code-confirm/adapters/form';
import { useCodeConfirmHandlers } from 'bl-modules/auth/code-confirm/adapters/handlers';
import { useCodeConfirmEffects } from 'bl-modules/auth/code-confirm/adapters/effects';
import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { useCodeConfirmRtkq } from 'bl-modules/auth/code-confirm/adapters/rtkq';
import { useCodeConfirmVariables } from 'bl-modules/auth/code-confirm/adapters/variables';
import { useCodeConfirmNavigation } from 'bl-modules/auth/code-confirm/adapters/navigation';
import { useHybridAuthAdapter } from 'bl-modules/auth/hybrid-auth/adapters/adapter';

export const useCodeConfirmAdapter = () => {
  const hybridAuthAdapter = useHybridAuthAdapter();
  //
  const rtkq = useCodeConfirmRtkq();
  const localState = useCodeConfirmLocalState();
  const navigation = useCodeConfirmNavigation();
  const form = useCodeConfirmForm();
  const variables = useCodeConfirmVariables(localState, navigation);
  const handlers = useCodeConfirmHandlers(localState, navigation, rtkq, hybridAuthAdapter);

  useCodeConfirmEffects(localState);

  return { handlers, variables, form };
};
