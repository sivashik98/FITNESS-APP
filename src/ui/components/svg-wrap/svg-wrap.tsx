import { FC } from 'react';
import { SvgWrapProps } from 'components/svg-wrap/types';
import { UIView } from 'components/ui-kit';
import { TouchableOpacity } from 'react-native-ui-lib';

export const SvgWrap: FC<SvgWrapProps> = ({ Icon, onPress, pressProps, iconProps, viewProps }) => {
  if (onPress)
    return (
      <TouchableOpacity {...pressProps}>
        <Icon {...iconProps} />
      </TouchableOpacity>
    );

  return (
    <UIView {...viewProps}>
      <Icon {...iconProps} />
    </UIView>
  );
};
