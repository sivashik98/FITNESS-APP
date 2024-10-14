import { FC } from 'react';

import { UIText, UIView } from 'ui/components';
import { GenderPicker } from 'ui/components';

import { TextTypes } from 'components/ui-kit/ui-text/types';
import { FinishSignUpStepProps } from 'screens/auth/finish-sign-up/components/types';

export const FirstStep: FC<FinishSignUpStepProps> = ({ localState }) => {
  return (
    <UIView gap-30>
      <UIText h1>Нам нужно лучше узнать вас</UIText>
      <UIText p1B type={TextTypes.secondary}>
        Эта информация поможет лучше сформировать подборку полезной информации для вас
      </UIText>
      <GenderPicker active={localState.activeGender} onPress={localState.setActiveGender} />
    </UIView>
  );
};
