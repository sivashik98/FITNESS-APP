import { PressableProps } from 'react-native';
import { ShadowProps } from 'react-native-shadow-2';
import { FC } from 'react';

import { IIconProps } from 'app/types';

export type UIButtonProps = {
  type: ButtonTypes;
  loading?: boolean;
  disabled?: boolean;
  title: string;
  LeftIcon?: FC<IIconProps>;
  onPress: PressableProps['onPress'];
} & PressableProps;

export enum ButtonTypes {
  filled = 'filled',
  outlined = 'outlined',
  texted = 'texted',
  elevated = 'elevated',
}

export type ShadowConfigType = { [key in keyof typeof ButtonTypes]: { distance: ShadowProps['distance']; offset: ShadowProps['offset'] } };
