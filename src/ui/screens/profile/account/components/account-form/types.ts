import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { useAccountVariables } from 'bl-modules/profile/account/adapters/variables';
import { useAccountHandlers } from 'bl-modules/profile/account/adapters/handlers';
import { useLogoutHandlers } from 'bl-modules/logout/adapters/handlers';

export type AccountFormProps = {
  form: ReturnType<typeof useAccountForm>;
  activeGender: ReturnType<typeof useAccountVariables>['activeGender'];
  onChangeGender: ReturnType<typeof useAccountHandlers>['onChangeGender'];
  logout: ReturnType<typeof useLogoutHandlers>['logout'];
  onChangePhone: ReturnType<typeof useAccountHandlers>['onChangePhone'];
  onChangeEmail: ReturnType<typeof useAccountHandlers>['onChangeEmail'];
  formattedPhone: ReturnType<typeof useAccountVariables>['formattedPhone'];
  email: ReturnType<typeof useAccountVariables>['email'];
};
