import { FC } from 'react';

import { FormDatePicker, UIText, UIView } from 'ui/components';

import { GoalCreationStepProps } from 'ui/screens/goal/goal-creation-steps/components/types';

export const FirstStep: FC<GoalCreationStepProps> = ({ form, variables }) => {
  return (
    <UIView gap={30}>
      <UIText font={'h1'}>Дата достижения цели</UIText>
      <FormDatePicker
        label={'Сбросить вес к'}
        control={form.goalDate.control}
        name={'goalDate'}
        minimumDate={variables.minimumGoalDate}
        maximumDate={variables.maximumGoalDate}
        bottomHint={'Можно не переживать, если данные не точны, можно будет изменить показания позже'}
      />
    </UIView>
  );
};
