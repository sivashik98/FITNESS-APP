import { FC } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { KeyboardAvoidingView, KeyboardStickyView } from 'react-native-keyboard-controller';

import { UIButton, UIProgressBar, UIView } from 'components/ui-kit';
import { Screen, SvgWrap } from 'ui/components';
import { SimpleLogoSvg } from 'svg/simple-logo';

import { DimensionsService } from 'tools/services';
import { useFinishSignUpAdapter } from 'bl-modules/auth/finish-sign-up';
import { FinishSignUpStepProps } from 'screens/auth/finish-sign-up/components/types';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { ThirdStep } from 'screens/auth/finish-sign-up/components';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <Screen
        scroll
        container={0}
        // scrollContainerStyles={{ flexGrow: 1 }}
        content={
          <>
            <UIView flex>
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
            </UIView>
          </>
        }
        footer={
          <UIView marginH-20 style={{ marginBottom: bottom }}>
            {/*<UIButton*/}
            {/*  type={'filled'}*/}
            {/*  title={variables.isLastStep ? 'Завершить регистрацию' : 'Продолжить'}*/}
            {/*  onPress={form.fullName.handleSubmit(variables.stepHandlers[localState.step])}*/}
            {/*/>*/}
            <UIButton type={'filled'} title={'Продолжить'} onPress={localState.goNextStep} />
            <UIButton type={'texted'} title={'Назад'} onPress={localState.goPrevStep} />
          </UIView>
        }
      />
      {/*<KeyboardAvoidingView*/}
      {/*  behavior={Platform.OS === 'ios' ? 'padding' : undefined}*/}
      {/*  style={{ gap: 20, marginHorizontal: 20, opacity: 0.3, backgroundColor: 'red' }}*/}
      {/*>*/}

      {/*</KeyboardAvoidingView>*/}
    </>
  );
};
