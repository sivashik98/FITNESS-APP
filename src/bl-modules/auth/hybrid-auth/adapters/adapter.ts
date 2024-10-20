import { useHybridAuthHandlers } from 'bl-modules/auth/hybrid-auth/adapters/handlers';
import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthVariables } from 'bl-modules/auth/hybrid-auth/adapters/variables';

type HybridAuthAdapterReturnValues = {
  localState: ReturnType<typeof useHybridAuthLocalState>;
  handlers: ReturnType<typeof useHybridAuthHandlers>;
  form: ReturnType<typeof useHybridAuthForm>;
  variables: ReturnType<typeof useHybridAuthVariables>;
};

export const useHybridAuthAdapter = (): HybridAuthAdapterReturnValues => {
  const form = useHybridAuthForm();
  const localState = useHybridAuthLocalState();
  const handlers = useHybridAuthHandlers(localState);
  const variables = useHybridAuthVariables(form, localState);

  return { localState, handlers, form, variables };
};
