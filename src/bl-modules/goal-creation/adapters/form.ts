import { useForm } from 'react-hook-form';

import { CURRENT_WEIGHT_VALIDATION, GOAL_DATE_VALIDATION, WISHED_WEIGHT_VALIDATION } from 'configs/validation/constants';

export type GoalDateFormFields = {
  goalDate: Date | null;
};
export type CurrentWeightFormFields = {
  currentWeight: number | null;
};
export type WishedWeightFormFields = {
  wishedWeight: number | null;
};

export const useGoalCreationForm = () => {
  const goalDateController = useForm<GoalDateFormFields>({
    resolver: GOAL_DATE_VALIDATION,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { goalDate: null },
  });
  const currentWeightController = useForm<CurrentWeightFormFields>({
    resolver: CURRENT_WEIGHT_VALIDATION,
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: { currentWeight: null },
  });
  const wishedWeightController = useForm<WishedWeightFormFields>({
    resolver: WISHED_WEIGHT_VALIDATION,
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: { wishedWeight: null },
  });

  return {
    goalDate: goalDateController,
    currentWeight: currentWeightController,
    wishedWeight: wishedWeightController,
  };
};
