import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { ProgressBar } from 'react-native-ui-lib';

import { UIProgressBarProps } from './types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

// TODO - заменить либу

export const UIProgressBar: FC<UIProgressBarProps> = ({ ...props }) => {
  const { theme } = useStyles();
  const { margin, padding } = useSpacings(props);

  return (
    <ProgressBar
      {...props}
      progressColor={theme.colors.progressBar.activeBg}
      style={{ backgroundColor: theme.colors.progressBar.bg, ...margin, ...padding }}
      fullWidth
    />
  );
};
