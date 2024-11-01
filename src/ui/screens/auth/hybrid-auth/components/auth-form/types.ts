import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthHandlers } from 'bl-modules/auth/hybrid-auth/adapters/handlers';
import { useHybridAuthVariables } from 'bl-modules/auth/hybrid-auth/adapters/variables';

export type AuthFormProps = {
  toggleTab: ReturnType<typeof useHybridAuthHandlers>['toggleTab'];
  currentTab: ReturnType<typeof useHybridAuthVariables>['currentTab'];
  form: ReturnType<typeof useHybridAuthForm>;
};
