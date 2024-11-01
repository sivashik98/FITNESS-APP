import { UIView } from 'ui/components/ui-kit';
import { Screen, WorkoutWidget } from 'ui/components';

import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { WorkoutWidgetProps } from 'ui/components/widgets/workout-widget/types';

const WORKOUTS: WorkoutWidgetProps['widget'][] = [
  { title: 'Здоровая спина', wallpaper: require('png/crossfit.png') },
  { title: 'Бег', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Кроссфит', wallpaper: require('png/workouts-jogging.png') },
  { title: 'Жим лежа', wallpaper: require('png/crossfit.png') },
  { title: 'Троеборье', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Футбол', wallpaper: require('png/workouts-jogging.png') },
];

export const WorkoutScreen = ({}) => {
  return (
    <Screen
      scroll
      removeTopSpace
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Тренировки' }}
      container={16}
      content={
        <UIView gap={20}>
          {WORKOUTS.map((widget, index) => (
            <WorkoutWidget key={index} widget={widget} />
          ))}
        </UIView>
      }
    />
  );
};
