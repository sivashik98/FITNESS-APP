import { FC, memo } from 'react';
import { useStyles } from 'react-native-unistyles';
import { ProgressBar } from 'react-native-ui-lib';

import { UIProgressBarProps } from './types';

export const UIProgressBar: FC<UIProgressBarProps> = memo(({ ...props }) => {
  const { theme } = useStyles();

  return (
    <ProgressBar
      {...props}
      progressColor={theme.colors.progressBar.regular.activeBg}
      style={{ backgroundColor: theme.colors.progressBar.regular.bg }}
      fullWidth
    />
  );
});
