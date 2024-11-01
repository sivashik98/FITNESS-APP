import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { useAccountVariables } from 'bl-modules/profile/account/adapters/variables';
import { useAccountHandlers } from 'bl-modules/profile/account/adapters/handlers';

export type AccountFormProps = {
  form: ReturnType<typeof useAccountForm>;
  activeGender: ReturnType<typeof useAccountVariables>['activeGender'];
  onChangeGender: ReturnType<typeof useAccountHandlers>['onChangeGender'];
};
