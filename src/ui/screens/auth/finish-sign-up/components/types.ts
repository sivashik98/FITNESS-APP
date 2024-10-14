import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';

export type FinishSignUpStepProps = {
  localState: ReturnType<typeof useFinishSignUpLocalState>;
  form: ReturnType<typeof useFinishSignUpForm>;
  handlers: ReturnType<typeof useFinishSignUpHandlers>;
};
