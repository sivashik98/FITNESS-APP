import { FC } from 'react';

import { UIText, UIView } from 'ui/components';
import { FormDatePicker } from 'ui/components/form/form-date-picker/form-date-picker';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';

export const SecondStep: FC<FinishSignUpStepProps> = ({ form }) => {
  return (
    <UIView gap={30}>
      <UIText font={'h1'}>Дата рождения</UIText>
      <UIText font={'p2R'} type={TextTypes.secondary}>
        Вы всегда сможете изменить эту информацию в настройках приложения
      </UIText>
      <FormDatePicker control={form.birthDate.control} name={'birthday'} />
    </UIView>
  );
};
