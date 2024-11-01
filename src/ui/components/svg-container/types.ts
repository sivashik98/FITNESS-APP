import { FC } from 'react';

import { SvgProps } from 'svg/types';
import { UIViewProps } from 'ui/components/ui-kit/ui-view/types';

export type SvgContainerProps = {
  Icon: FC<SvgProps>;
  iconProps?: SvgProps;
} & UIViewProps;
