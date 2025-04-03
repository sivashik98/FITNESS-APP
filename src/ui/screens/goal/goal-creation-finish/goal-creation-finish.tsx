import { Screen } from 'ui/components';
import { Footer, Poster } from './components';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootNavigationParams } from 'ui/navigation/root/types';

export const GoalCreationFinishScreen = () => {
  const { goal, onCreateGoal } = useRoute<RouteProp<RootNavigationParams, 'GoalCreationFinishScreen'>>()?.params;

  return (
    <Screen
      container={0}
      removeBottomSpace
      removeTopSpace
      content={
        <>
          <Poster />
          <Footer goal={goal} onCreateGoal={onCreateGoal} />
        </>
      }
    />
  );
};
