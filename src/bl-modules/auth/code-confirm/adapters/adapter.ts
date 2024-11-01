import { useCodeConfirmForm } from 'bl-modules/auth/code-confirm/adapters/form';
import { useCodeConfirmHandlers } from 'bl-modules/auth/code-confirm/adapters/handlers';
import { useCodeConfirmEffects } from 'bl-modules/auth/code-confirm/adapters/effects';
import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
// import { useCodeConfirmRtkq } from 'bl-modules/auth/code-confirm/adapters/rtkq';
import { useCodeConfirmVariables } from 'bl-modules/auth/code-confirm/adapters/variables';
import { useCodeConfirmNavigation } from 'bl-modules/auth/code-confirm/adapters/navigation';

type CodeConfirmAdapterReturnValues = {
  form: ReturnType<typeof useCodeConfirmForm>;
  handlers: ReturnType<typeof useCodeConfirmHandlers>;
  variables: ReturnType<typeof useCodeConfirmVariables>;
};

export const useCodeConfirmAdapter = (): CodeConfirmAdapterReturnValues => {
  // const rtkq = useCodeConfirmRtkq();
  const localState = useCodeConfirmLocalState();
  const navigation = useCodeConfirmNavigation();
  const form = useCodeConfirmForm();
  const handlers = useCodeConfirmHandlers(localState);
  const variables = useCodeConfirmVariables(localState, navigation);

  useCodeConfirmEffects(localState);

  return { handlers, variables, form };
};
