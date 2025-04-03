import { FC } from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { UIButton, UIView } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { Header } from 'ui/screens/auth/finish-sign-up/components';

import { DimensionsService } from 'tools/services';
import { useFinishSignUpAdapter } from 'bl-modules/auth/finish-sign-up';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';

type ItemProps = {
  item: FC<FinishSignUpStepProps>;
  index: number;
};

const renderItem =
  ({ form, onChangeGender, activeGender }: FinishSignUpStepProps) =>
  ({ item: Step, index }: ItemProps) => {
    return (
      <UIView key={index} marginH={20}>
        <Step form={form} onChangeGender={onChangeGender} activeGender={activeGender} />
      </UIView>
    );
  };

export const FinishSignUpScreen = () => {
  const { variables, form, handlers } = useFinishSignUpAdapter();

  return (
    <Screen
      scroll
      container={0}
      content={
        <>
          <Header progress={variables.progress} onPress={handlers.goPrevStep} shouldShowBackButton={!variables.isFirstStep} />
          <Carousel
            ref={variables.carouselRef}
            data={STEPS}
            height={600}
            width={DimensionsService.screen.width}
            renderItem={renderItem({ form, onChangeGender: handlers.onChangeGender, activeGender: variables.activeGender })}
            style={{ marginTop: 32 }}
            loop={false}
            enabled={false}
            onSnapToItem={handlers.onChangeStep}
          />
        </>
      }
      footer={
        <UIButton
          type={ButtonTypes.filled}
          loading={variables.isLoadingRegister}
          title={variables.isLastStep ? 'Завершить регистрацию' : 'Продолжить'}
          onPress={handlers.stepHandlers[variables.step]}
        />
      }
    />
  );
};
