import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { FC } from 'react';

import { IIconProps } from 'app/types';
import { APP_COLORS } from 'app/theme/colors';

export const PlusIconSvg: FC<IIconProps> = ({ size = 16, color = APP_COLORS.black, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path d='M8 4v8M4 8h8' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  );
};
