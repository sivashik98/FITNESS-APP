import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { Switch } from 'react-native-ui-lib';

import { UISwitchProps } from 'ui/components/ui-kit/ui-switch/types';

export const UISwitch: FC<UISwitchProps> = ({ ...props }) => {
  const { theme } = useStyles();

  return <Switch onColor={theme.colors.switch.regular.bgActive} offColor={theme.colors.switch.regular.bg} {...props} />;
};
