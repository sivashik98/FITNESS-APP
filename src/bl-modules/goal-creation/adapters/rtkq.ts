import { UserService } from 'app/api/endpoints';

export const useGoalCreationRtkq = () => {
  const [createGoal, { isLoading }] = UserService.useCreateGoalMutation();

  return {
    createGoal,
    isLoading,
  };
};
