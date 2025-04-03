import { useAppStateHandlers } from 'bl-modules/app-state/adapters/handlers';
import { useAppStateVariables } from 'bl-modules/app-state/adapters/variables';

type AppStateAdapterReturnValues = {
  handlers: ReturnType<typeof useAppStateHandlers>;
  variables: ReturnType<typeof useAppStateVariables>;
};

export const useAppStateAdapter = (): AppStateAdapterReturnValues => {
  const handlers = useAppStateHandlers();
  const variables = useAppStateVariables();

  return {
    handlers,
    variables,
  };
};
