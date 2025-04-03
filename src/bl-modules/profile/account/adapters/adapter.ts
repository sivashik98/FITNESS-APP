import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';
import { useAccountVariables } from 'bl-modules/profile/account/adapters/variables';
import { useAccountHandlers } from 'bl-modules/profile/account/adapters/handlers';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';
import { useAccountRtkq } from 'bl-modules/profile/account/adapters/rtkq';

type AccountAdapterReturnValues = {
  form: ReturnType<typeof useAccountForm>;
  variables: ReturnType<typeof useAccountVariables>;
  handlers: ReturnType<typeof useAccountHandlers>;
};

export const useAccountAdapter = (): AccountAdapterReturnValues => {
  const userInfoAdapter = useUserInfoAdapter();
  //
  const rtkq = useAccountRtkq();
  const form = useAccountForm(userInfoAdapter);
  const localState = useAccountLocalState(userInfoAdapter);
  const variables = useAccountVariables(localState, userInfoAdapter);
  const handlers = useAccountHandlers(form, localState, rtkq, userInfoAdapter);

  return { form, handlers, variables };
};
