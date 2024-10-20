import { FC } from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { UIButton, UIProgressBar, UIView } from 'ui/components/ui-kit';
import { Screen, SvgWrap } from 'ui/components';
import { SimpleLogoSvg } from 'svg/simple-logo';

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
  ({ localState, form, handlers }: FinishSignUpStepProps) =>
  ({ item: Step, index }: ItemProps) => {
    return (
      <UIView marginH-20 key={index}>
        <Step localState={localState} form={form} handlers={handlers} />
      </UIView>
    );
  };

export const FinishSignUpScreen = () => {
  const { variables, localState, form, handlers } = useFinishSignUpAdapter();

  return (
    <Screen
      scroll
      container={0}
      content={
        <>
          <UIView gap-30 paddingH-20>
            <SvgWrap Icon={SimpleLogoSvg} viewProps={{ style: { alignItems: 'center' } }} />
            <UIProgressBar progress={localState.progress} />
          </UIView>
          <Carousel
            ref={localState.carouselRef}
            data={STEPS}
            height={600}
            width={DimensionsService.screen.width}
            renderItem={renderItem({ localState, form, handlers })}
            style={{ marginTop: 32 }}
            loop={false}
            enabled={false}
            onSnapToItem={localState.onChangeStep}
          />
        </>
      }
      footer={
        <>
          <UIButton
            type={ButtonTypes.filled}
            title={variables.isLastStep ? 'Завершить регистрацию' : 'Продолжить'}
            onPress={variables.stepHandlers[localState.step]}
          />
          {!variables.isFirstStep && <UIButton type={ButtonTypes.texted} title={'Назад'} onPress={localState.goPrevStep} />}
        </>
      }
    />
  );
};
