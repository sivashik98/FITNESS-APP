import { useUserInfoHandlers } from 'bl-modules/user/user-info/adapters/handlers';
import { useUserInfoRtkq } from 'bl-modules/user/user-info/adapters/rtkq';
import { useUserInfoVariables } from 'bl-modules/user/user-info/adapters/variables';
import { useUserInfoEffects } from 'bl-modules/user/user-info/adapters/effects';

type UserInfoAdapterReturnValues = {
  handlers: ReturnType<typeof useUserInfoHandlers>;
  variables: ReturnType<typeof useUserInfoVariables>;
};

export const useUserInfoAdapter = (): UserInfoAdapterReturnValues => {
  const rtkq = useUserInfoRtkq();
  const variables = useUserInfoVariables(rtkq);
  const handlers = useUserInfoHandlers(rtkq);

  useUserInfoEffects(rtkq);

  return { variables, handlers };
};
