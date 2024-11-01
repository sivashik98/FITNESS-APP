import { FC } from 'react';

import { FormDateField, UIText, UIView } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';

export const SecondStep: FC<FinishSignUpStepProps> = ({ form }) => {
  return (
    <UIView gap={30}>
      <UIText font={'h1'}>Дата рождения</UIText>
      <UIText font={'p1B'} type={TextTypes.secondary}>
        Вы всегда сможете изменить эту информацию в настройках приложения
      </UIText>
      <FormDateField control={form.birthDate.control} name={'birthDate'} leadingAccessory={<UIText font={'p1B'}>Дата</UIText>} />
    </UIView>
  );
};
