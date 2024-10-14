import { SegmentedControl } from 'react-native-ui-lib';
import { Platform } from 'react-native';
import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UISegmentedControlProps } from 'components/ui-kit/ui-segmented-control/types';
import { APP_FONTS } from 'app/theme/fonts';

export const UiSegmentedControl: FC<UISegmentedControlProps> = ({ ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <SegmentedControl
      borderRadius={Platform.select({ ios: 8, android: 8 })}
      backgroundColor={theme.colors.segmentControl.regular.bg}
      outlineColor={theme.colors.segmentControl.regular.bg}
      activeBackgroundColor={theme.colors.segmentControl.regular.activeBg}
      inactiveColor={theme.colors.segmentControl.regular.text}
      activeColor={theme.colors.segmentControl.regular.text}
      segmentLabelStyle={APP_FONTS.p3M}
      segmentsStyle={styles.segmentsStyle}
      {...props}
    />
  );
};

const stylesheet = createStyleSheet({
  segmentsStyle: {
    flex: 1,
    height: 40,
  },
});
