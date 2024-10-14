import { useCodeConfirmForm } from 'bl-modules/auth/code-confirm/adapters/form';
import { useCodeConfirmHandlers } from 'bl-modules/auth/code-confirm/adapters/handlers';
import { useCodeConfirmEffects } from 'bl-modules/auth/code-confirm/adapters/effects';
import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';

type CodeConfirmAdapterReturnValues = {
  form: ReturnType<typeof useCodeConfirmForm>;
  handlers: ReturnType<typeof useCodeConfirmHandlers>;
  localState: ReturnType<typeof useCodeConfirmLocalState>;
};

export const useCodeConfirmAdapter = (): CodeConfirmAdapterReturnValues => {
  const form = useCodeConfirmForm();
  const localState = useCodeConfirmLocalState();
  const handlers = useCodeConfirmHandlers(localState);

  useCodeConfirmEffects(handlers, localState);

  return { form, handlers, localState };
};
