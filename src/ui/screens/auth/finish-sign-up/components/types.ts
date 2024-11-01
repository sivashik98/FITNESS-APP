import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';
import { useFinishSignUpVariables } from 'bl-modules/auth/finish-sign-up/adapters/variables';

export type FinishSignUpStepProps = {
  form: ReturnType<typeof useFinishSignUpForm>;
  activeGender: ReturnType<typeof useFinishSignUpVariables>['activeGender'];
  onChangeGender: ReturnType<typeof useFinishSignUpHandlers>['onChangeGender'];
};
