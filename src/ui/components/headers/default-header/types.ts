import { FC } from 'react';

import { Spacings } from 'tools/hooks/use-spacings/types';

export type DefaultHeaderProps = {
  RightIcon?: FC;
  CenterIcon?: FC;
  title?: string;
  canGoBack?: boolean;
} & Spacings;
