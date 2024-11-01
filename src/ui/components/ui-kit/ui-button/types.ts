import { ShadowProps } from 'react-native-shadow-2';
import { FC } from 'react';
import { MotiPressableProps } from 'moti/interactions';
import { PressableProps } from 'react-native';

import { SvgProps } from 'svg/types';
import { Spacings } from 'tools/hooks/use-spacings/types';

export type UIButtonProps = {
  type: ButtonTypes;
  loading?: boolean;
  disabled?: boolean;
  title: string;
  LeftIcon?: FC<SvgProps>;
  onPress: PressableProps['onPress'] | MotiPressableProps['onPress'];
} & Spacings;

export enum ButtonTypes {
  filled = 'filled',
  outlined = 'outlined',
  texted = 'texted',
  elevated = 'elevated',
}

export type ShadowConfigType = { [key in keyof typeof ButtonTypes]: { distance: ShadowProps['distance']; offset: ShadowProps['offset'] } };
