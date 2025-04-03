import { useFinishSignUpVariables } from 'bl-modules/auth/finish-sign-up/adapters/variables';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';
import { useFinishSignUpRtkq } from 'bl-modules/auth/finish-sign-up/adapters/rtkq';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

type FinishSignUpAdapterReturnValues = {
  form: ReturnType<typeof useFinishSignUpForm>;
  handlers: ReturnType<typeof useFinishSignUpHandlers>;
  variables: ReturnType<typeof useFinishSignUpVariables>;
};

export const useFinishSignUpAdapter = (): FinishSignUpAdapterReturnValues => {
  const userInfoAdapter = useUserInfoAdapter();

  const rtkq = useFinishSignUpRtkq();
  const localState = useFinishSignUpLocalState();
  const form = useFinishSignUpForm();
  const handlers = useFinishSignUpHandlers(localState, form, rtkq, userInfoAdapter);
  const variables = useFinishSignUpVariables(localState, rtkq);

  return { variables, form, handlers };
};
