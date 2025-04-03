import { FC } from 'react';

import { FormWeightPicker, UIText, UIView } from 'ui/components';

import { GoalCreationStepProps } from 'ui/screens/goal/goal-creation-steps/components/types';

export const ThirdStep: FC<GoalCreationStepProps> = ({ form }) => (
  <UIView gap={30}>
    <UIText font={'h1'}>Желаемый вес</UIText>
    <FormWeightPicker
      control={form.wishedWeight.control}
      name={'wishedWeight'}
      weightRange={[35, 250]}
      modalLabel={'Желаемый вес (кг)'}
      placeholder={'введите вес'}
      bottomHint={'Можно не переживать, если данные не точны, можно будет изменить показания позже'}
    />
  </UIView>
);
