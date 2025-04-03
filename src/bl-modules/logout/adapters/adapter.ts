import { useLogoutRtkq } from 'bl-modules/logout/adapters/rtkq';
import { useLogoutHandlers } from 'bl-modules/logout/adapters/handlers';
import { useLogoutVariables } from 'bl-modules/logout/adapters/variables';

export const useLogoutAdapter = () => {
  const rtkq = useLogoutRtkq();
  const variables = useLogoutVariables(rtkq);
  const handlers = useLogoutHandlers(rtkq);

  return { variables, handlers };
};
