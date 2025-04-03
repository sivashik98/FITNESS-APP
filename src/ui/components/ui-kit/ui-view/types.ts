import { ViewStyle, ViewProps, PressableProps } from 'react-native';
import { MotiProps } from 'moti';
import { MotiPressableProps } from 'moti/interactions';

import { APP_COLORS } from 'app/theme';
import { Spacings } from 'tools/hooks/use-spacings/types';

export type UIViewProps = {
  flex?: ViewStyle['flex'];
  flexS?: ViewStyle['flexShrink'];
  ai?: ViewStyle['alignItems'];
  jc?: ViewStyle['justifyContent'];
  as?: ViewStyle['alignSelf'];
  direction?: ViewStyle['flexDirection'];
  gap?: ViewStyle['gap'];
  wrap?: ViewStyle['flexWrap'];
  w?: ViewStyle['width'];
  h?: ViewStyle['height'];
  gapR?: ViewStyle['rowGap'];
  gapC?: ViewStyle['columnGap'];
  border?: ViewStyle['borderWidth'];
  borderC?: ViewStyle['borderColor'];
  radius?: ViewStyle['borderRadius'];
  radiusTR?: ViewStyle['borderTopRightRadius'];
  radiusTL?: ViewStyle['borderTopLeftRadius'];
  radiusBR?: ViewStyle['borderBottomRightRadius'];
  radiusLR?: ViewStyle['borderBottomLeftRadius'];
  //
  bg?: keyof typeof APP_COLORS;
  onPress?: PressableProps['onPress'] | MotiPressableProps['onPress'];
  animated?: boolean;
} & Spacings &
  ViewProps &
  PressableProps &
  MotiProps &
  MotiPressableProps;
