import { TextProps } from 'react-native';
import { ReactNode } from 'react';

import { APP_FONTS } from 'app/theme/fonts';
import { Spacings } from 'tools/hooks/use-spacings/types';
import { APP_COLORS } from 'app/theme';

export type UITextProps = {
  type?: TextTypes;
  font: keyof typeof APP_FONTS;
  color?: keyof typeof APP_COLORS;
  children: ReactNode;
  underline?: boolean;
  center?: boolean;
} & TextProps &
  Spacings;

export enum TextTypes {
  primary = 'primary',
  secondary = 'secondary',
  error = 'error',
  accent = 'accent',
  link = 'link',
}
