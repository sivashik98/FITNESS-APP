import { useFinishSignUpVariables } from 'bl-modules/auth/finish-sign-up/adapters/variables';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';

type FinishSignUpAdapterReturnValues = {
  variables: ReturnType<typeof useFinishSignUpVariables>;
  localState: ReturnType<typeof useFinishSignUpLocalState>;
  form: ReturnType<typeof useFinishSignUpForm>;
  handlers: ReturnType<typeof useFinishSignUpHandlers>;
};

export const useFinishSignUpAdapter = (): FinishSignUpAdapterReturnValues => {
  const localState = useFinishSignUpLocalState();
  const form = useFinishSignUpForm();
  const handlers = useFinishSignUpHandlers(localState, form);
  const variables = useFinishSignUpVariables(localState, handlers, form);

  return { variables, localState, form, handlers };
};
