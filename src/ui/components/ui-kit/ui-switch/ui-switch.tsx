import { FC } from 'react';
import { Switch } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { UISwitchProps } from 'ui/components/ui-kit/ui-switch/types';

export const UISwitch: FC<UISwitchProps> = ({ ...props }) => {
  const { theme } = useStyles();

  return <Switch trackColor={{ false: theme.colors.switch.bg, true: theme.colors.switch.bgActive }} {...props} />;
};
