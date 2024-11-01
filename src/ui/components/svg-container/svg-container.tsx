import { FC } from 'react';

import { SvgContainerProps } from 'ui/components/svg-container/types';
import { UIView } from 'ui/components/ui-kit';

export const SvgContainer: FC<SvgContainerProps> = ({ Icon, iconProps, ...props }) => {
  return (
    <UIView {...props}>
      <Icon {...iconProps} />
    </UIView>
  );
};
