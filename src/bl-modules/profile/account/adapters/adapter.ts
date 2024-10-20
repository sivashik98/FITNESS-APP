import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';

type AccountAdapterReturnValues = {
  form: ReturnType<typeof useAccountForm>;
  localState: ReturnType<typeof useAccountLocalState>;
};

export const useAccountAdapter = (): AccountAdapterReturnValues => {
  const form = useAccountForm();
  const localState = useAccountLocalState();

  return { form, localState };
};
