import { FC } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Image } from 'expo-image';

import { UIButton, UIText, UIView } from 'ui/components';

import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';
import { FirstGoalCreationWidgetProps } from 'ui/components/widgets/first-goal-creation-widget/types';
import { NavigationService } from 'tools/services';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { APP_COLORS } from 'app/theme';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';

export const FirstGoalCreationWidget: FC<FirstGoalCreationWidgetProps> = ({ ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  return (
    <UIView animated from={{ scale: 0.3 }} animate={{ scale: 1 }} style={[styles.container, margin, padding]}>
      <Shadow distance={6} startColor={theme.colors.userWidget.shadow} offset={[0, 2]} style={styles.widget} stretch>
        <Image source={require('png/cup.png')} style={styles.cup} />
        <UIView flexS={1} gap={20} ai={'flex-start'}>
          <UIView>
            <UIText font={'h2'}>Впереди новые свершения</UIText>
            <UIText font={'p3R'} type={TextTypes.secondary}>
              Постановка цели наладить здоровый образ жизни — это важный шаг на пути к гармонии и благополучию.
            </UIText>
          </UIView>
          <UIButton type={ButtonTypes.smallPrimary} title={'Создать цель'} onPress={() => NavigationService.navigate('GoalCreationPreviewScreen')} />
        </UIView>
      </Shadow>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  widget: {
    // width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.userWidget.bg,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  cup: {
    width: 100,
    height: 100,
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: APP_COLORS.black,
  },
}));
