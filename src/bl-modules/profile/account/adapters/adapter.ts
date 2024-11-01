import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';
import { useAccountVariables } from 'bl-modules/profile/account/adapters/variables';
import { useAccountHandlers } from 'bl-modules/profile/account/adapters/handlers';

type AccountAdapterReturnValues = {
  form: ReturnType<typeof useAccountForm>;
  variables: ReturnType<typeof useAccountVariables>;
  handlers: ReturnType<typeof useAccountHandlers>;
};

export const useAccountAdapter = (): AccountAdapterReturnValues => {
  const form = useAccountForm();
  const localState = useAccountLocalState();
  const variables = useAccountVariables(localState);
  const handlers = useAccountHandlers(form, localState);

  return { form, handlers, variables };
};
