import { FC } from 'react';

import { UIView } from 'ui/components/ui-kit';

import { SvgContainerProps } from 'ui/components/svg-container/types';

export const SvgContainer: FC<SvgContainerProps> = ({ Icon, iconProps, ...props }) => {
  return (
    <UIView {...props}>
      <Icon {...iconProps} />
    </UIView>
  );
};
