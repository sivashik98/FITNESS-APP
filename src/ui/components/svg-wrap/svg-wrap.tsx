import { FC } from 'react';
import { TouchableOpacity } from 'react-native-ui-lib';

import { SvgWrapProps } from 'ui/components/svg-wrap/types';
import { UIView } from 'ui/components/ui-kit';

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
