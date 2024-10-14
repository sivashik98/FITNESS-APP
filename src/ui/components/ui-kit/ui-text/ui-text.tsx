import React, { FC } from 'react';
import { Text } from 'react-native-ui-lib';
import { useStyles } from 'react-native-unistyles';

import { TextTypes, UITextProps } from './types';

export const UIText: FC<UITextProps> = ({ children, type = TextTypes.primary, ...props }) => {
  const { theme } = useStyles();

  return (
    <Text flexS color={theme.colors.text[type].text} {...props}>
      {children}
    </Text>
  );
};
