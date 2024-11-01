import { useHybridAuthHandlers } from 'bl-modules/auth/hybrid-auth/adapters/handlers';
import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthVariables } from 'bl-modules/auth/hybrid-auth/adapters/variables';
import { useHybridAuthRtkq } from 'bl-modules/auth/hybrid-auth/adapters/rtkq';

type HybridAuthAdapterReturnValues = {
  handlers: ReturnType<typeof useHybridAuthHandlers>;
  form: ReturnType<typeof useHybridAuthForm>;
  variables: ReturnType<typeof useHybridAuthVariables>;
};

export const useHybridAuthAdapter = (): HybridAuthAdapterReturnValues => {
  const rtkq = useHybridAuthRtkq();
  const localState = useHybridAuthLocalState();
  const form = useHybridAuthForm();
  const handlers = useHybridAuthHandlers(localState, rtkq);
  const variables = useHybridAuthVariables(localState, rtkq, form);

  return { variables, handlers, form };
};
