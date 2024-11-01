import { useFinishSignUpVariables } from 'bl-modules/auth/finish-sign-up/adapters/variables';

export type HeaderProps = {
  progress: ReturnType<typeof useFinishSignUpVariables>['progress'];
};
