import { useCodeConfirmForm } from 'bl-modules/auth/code-confirm/adapters/form';
import { useCodeConfirmVariables } from 'bl-modules/auth/code-confirm/adapters/variables';
import { useCodeConfirmHandlers } from 'bl-modules/auth/code-confirm/adapters/handlers';

export type CodeConfirmFormProps = {
  form: ReturnType<typeof useCodeConfirmForm>;
  shouldShowTimer: ReturnType<typeof useCodeConfirmVariables>['shouldShowTimer'];
  duration: ReturnType<typeof useCodeConfirmVariables>['duration'];
  authMethodTitle: ReturnType<typeof useCodeConfirmVariables>['authMethodTitle'];
  authDataTitle: ReturnType<typeof useCodeConfirmVariables>['authDataTitle'];
  onSubmit: ReturnType<typeof useCodeConfirmHandlers>['submitHandler'];
};
