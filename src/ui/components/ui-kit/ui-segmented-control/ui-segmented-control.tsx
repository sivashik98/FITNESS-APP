import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import SegmentedControl, { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { NativeSyntheticEvent } from 'react-native';

import { APP_FONTS } from 'app/theme/fonts';
import { UISegmentedControlProps } from 'ui/components/ui-kit/ui-segmented-control/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const UISegmentedControl: FC<UISegmentedControlProps> = ({ onChange, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  const onValueChangeWithImpact = async (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    onChange?.(event);
    await impactAsync(ImpactFeedbackStyle.Light);
  };

  return (
    <SegmentedControl
      backgroundColor={theme.colors.segmentControl.bg}
      tabStyle={styles.tabStyle}
      style={[styles.container, margin, padding]}
      fontStyle={styles.fontStyle}
      onChange={onValueChangeWithImpact}
      {...props}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 45,
    padding: 4,
    color: theme.colors.segmentControl.text,
  },
  fontStyle: {
    ...APP_FONTS.p3M,
    color: theme.colors.segmentControl.text,
  },
  tabStyle: {
    // backgroundColor: theme.colors.segmentControl.regular.activeBg,
    padding: 10,
  },
}));
