import { SegmentedControl } from 'react-native-ui-lib';
import { Platform } from 'react-native';
import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { APP_FONTS } from 'app/theme/fonts';
import { UISegmentedControlProps } from 'ui/components/ui-kit/ui-segmented-control/types';

export const UISegmentedControl: FC<UISegmentedControlProps> = ({ ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <SegmentedControl
      borderRadius={Platform.select({ ios: 8, android: 8 })}
      backgroundColor={theme.colors.segmentControl.regular.bg}
      outlineWidth={2}
      style={{ borderWidth: 0 }}
      outlineColor={theme.colors.segmentControl.regular.bg}
      activeBackgroundColor={theme.colors.segmentControl.regular.activeBg}
      inactiveColor={theme.colors.segmentControl.regular.text}
      activeColor={theme.colors.segmentControl.regular.text}
      segmentLabelStyle={styles.labelStyle}
      segmentsStyle={styles.segmentsStyle}
      {...props}
    />
  );
};

const stylesheet = createStyleSheet({
  segmentsStyle: {
    flex: 1,
    height: 50,
  },
  labelStyle: {
    ...APP_FONTS.p3M,
    fontWeight: '500',
  },
});
