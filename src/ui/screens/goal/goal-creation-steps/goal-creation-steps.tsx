import { FC } from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { UIButton, UIView } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { Header } from 'ui/screens/auth/finish-sign-up/components';

import { DimensionsService, NavigationService } from 'tools/services';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useGoalCreationAdapter } from 'bl-modules/goal-creation';
import { STEPS } from 'bl-modules/goal-creation/adapters/constants';
import { GoalCreationStepProps } from 'ui/screens/goal/goal-creation-steps/components/types';

type ItemProps = {
  item: FC<GoalCreationStepProps>;
  index: number;
};

const renderItem =
  ({ form, variables }: GoalCreationStepProps) =>
  ({ item: Step, index }: ItemProps) => {
    return (
      <UIView key={index} marginH={20}>
        <Step form={form} variables={variables} />
      </UIView>
    );
  };

export const GoalCreationStepsScreen = () => {
  const { variables, form, handlers } = useGoalCreationAdapter();

  return (
    <Screen
      scroll
      container={0}
      content={
        <>
          <Header
            progress={variables.progress}
            onPress={variables.isFirstStep ? NavigationService.goBack : handlers.goPrevStep}
            shouldShowBackButton
          />
          <Carousel
            ref={variables.carouselRef}
            data={STEPS}
            height={600}
            width={DimensionsService.screen.width}
            renderItem={renderItem({ form, variables })}
            style={{ marginTop: 32 }}
            loop={false}
            enabled={false}
            onSnapToItem={handlers.onChangeStep}
          />
        </>
      }
      footer={<UIButton type={ButtonTypes.filled} title={'Продолжить'} onPress={handlers.stepHandlers[variables.step]} />}
    />
  );
};
