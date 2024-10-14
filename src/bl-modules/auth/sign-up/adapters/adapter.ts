import { useSignUpVariables } from 'bl-modules/auth/sign-up/adapters/variables';
import { useSignUpHandlers } from 'bl-modules/auth/sign-up/adapters/handlers';
import { useSignUpForm } from 'bl-modules/auth/sign-up/adapters/form';

type SignUpAdapterReturnValues = {
  variables: ReturnType<typeof useSignUpVariables>;
  handlers: ReturnType<typeof useSignUpHandlers>;
  form: ReturnType<typeof useSignUpForm>;
};

export const useSignUpAdapter = (): SignUpAdapterReturnValues => {
  const variables = useSignUpVariables();
  const handlers = useSignUpHandlers();
  const form = useSignUpForm();

  return { variables, handlers, form };
};
