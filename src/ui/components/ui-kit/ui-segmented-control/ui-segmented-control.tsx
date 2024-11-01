import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import { APP_FONTS } from 'app/theme/fonts';
import { UISegmentedControlProps } from 'ui/components/ui-kit/ui-segmented-control/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const UISegmentedControl: FC<UISegmentedControlProps> = ({ ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  return (
    <SegmentedControl
      backgroundColor={theme.colors.segmentControl.bg}
      tabStyle={styles.tabStyle}
      style={[styles.container, margin, padding]}
      fontStyle={styles.fontStyle}
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
