import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'expo-image';

import { UIText, UIView } from 'ui/components';

import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';
import { WorkoutWidgetProps } from 'ui/components/widgets/workout-widget/types';

export const WorkoutWidget: FC<WorkoutWidgetProps> = ({ widget, ...props }) => {
  const { margin, padding } = useSpacings(props);

  return (
    <UIView style={[styles.container, margin, padding]}>
      <ImageBackground source={widget.wallpaper} style={styles.wallpaper}>
        <UIText font={'p1B'} color={'white'}>
          {widget.title}
        </UIText>
      </ImageBackground>
    </UIView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  wallpaper: {
    width: 170,
    height: 170,
    padding: 6,
    justifyContent: 'flex-end',
  },
  widgetStyle: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
});
