import { useGoalCreationVariables } from 'bl-modules/goal-creation/adapters/variables';
import { useGoalCreationRtkq } from 'bl-modules/goal-creation/adapters/rtkq';
import { useGoalCreationLocalState } from 'bl-modules/goal-creation/adapters/local-state';
import { useGoalCreationForm } from 'bl-modules/goal-creation/adapters/form';
import { useGoalCreationHandlers } from 'bl-modules/goal-creation/adapters/handlers';

export const useGoalCreationAdapter = () => {
  const rtkq = useGoalCreationRtkq();
  const localState = useGoalCreationLocalState();
  const form = useGoalCreationForm();
  const handlers = useGoalCreationHandlers(form, localState, rtkq);
  const variables = useGoalCreationVariables(localState);

  return { variables, form, handlers };
};
