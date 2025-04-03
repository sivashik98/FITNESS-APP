import { useGoalCreationForm } from 'bl-modules/goal-creation/adapters/form';
import { useGoalCreationVariables } from 'bl-modules/goal-creation/adapters/variables';

export type GoalCreationStepProps = {
  form: ReturnType<typeof useGoalCreationForm>;
  variables: ReturnType<typeof useGoalCreationVariables>;
};
