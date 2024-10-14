import { FC } from 'react';
import { IIconProps } from 'app/types';
import { UIViewProps } from 'components/ui-kit/ui-view/types';
import { TouchableOpacityProps } from 'react-native-ui-lib';

export type SvgWrapProps = {
  Icon: FC<IIconProps>;
  iconProps?: IIconProps;
  pressProps?: TouchableOpacityProps;
  viewProps?: UIViewProps;
  onPress?: TouchableOpacityProps['onPress'];
};
