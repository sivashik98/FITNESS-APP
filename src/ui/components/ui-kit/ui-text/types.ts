import { TextProps } from 'react-native-ui-lib';
import { ReactNode } from 'react';

import { APP_FONTS } from 'app/theme/fonts';

export type UITextProps = {
  type?: TextTypes;
  children: ReactNode;
} & {
  [key in keyof typeof APP_FONTS]?: boolean;
} & TextProps;

export enum TextTypes {
  primary = 'primary',
  secondary = 'secondary',
  error = 'error',
  accent = 'accent',
}
