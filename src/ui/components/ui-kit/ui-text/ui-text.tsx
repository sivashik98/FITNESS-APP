import React, { FC } from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { TextTypes, UITextProps } from './types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';
import { APP_FONTS } from 'app/theme/fonts';

export const UIText: FC<UITextProps> = ({ children, type = TextTypes.primary, center, color, font, underline, ...props }) => {
  const { theme } = useStyles();
  const { margin, padding } = useSpacings(props);

  return (
    <Text
      allowFontScaling={false}
      style={{
        textAlign: center ? 'center' : 'auto',
        flexShrink: 1,
        color: color || theme.colors.text[type].text,
        ...APP_FONTS[font],
        ...margin,
        ...padding,
        textDecorationLine: underline ? 'underline' : 'none',
      }}
      {...props}
    >
      {children}
    </Text>
  );
};
