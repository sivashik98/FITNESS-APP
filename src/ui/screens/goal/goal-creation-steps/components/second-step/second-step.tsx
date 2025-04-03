import { FC } from 'react';

import { FormWeightPicker, UIText, UIView } from 'ui/components';

import { GoalCreationStepProps } from 'ui/screens/goal/goal-creation-steps/components/types';

export const SecondStep: FC<GoalCreationStepProps> = ({ form }) => (
  <UIView gap={30}>
    <UIText font={'h1'}>Текущий вес</UIText>
    <FormWeightPicker
      control={form.currentWeight.control}
      name={'currentWeight'}
      weightRange={[35, 250]}
      modalLabel={'Текущий вес (кг)'}
      placeholder={'введите вес'}
      bottomHint={'Можно не переживать, если данные не точны, можно будет изменить показания позже'}
    />
  </UIView>
);
