import { FC } from 'react';

import { UIText, UIView } from 'ui/components';
import { GenderPicker } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';

export const FirstStep: FC<FinishSignUpStepProps> = ({ activeGender, onChangeGender }) => {
  return (
    <UIView gap={30}>
      <UIText font={'h1'}>Нам нужно лучше узнать вас</UIText>
      <UIText font={'p2R'} type={TextTypes.secondary}>
        Эта информация поможет лучше сформировать подборку полезной информации для вас
      </UIText>
      <GenderPicker active={activeGender} onPress={onChangeGender} />
    </UIView>
  );
};
