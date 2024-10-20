import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { FC } from 'react';

import { APP_COLORS } from 'app/theme/colors';
import { SvgProps } from 'svg/types';
import { useStyles } from 'react-native-unistyles';

export const ProfileIconSvg: FC<SvgProps> = ({ size = 20, color = APP_COLORS.black, ...props }) => {
  const { theme } = useStyles();
  return (
    <Svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
        d='M14.666 16.341a4.828 4.828 0 00-9.332 0M10 18.187c5.24 0 8.187-2.947 8.187-8.187 0-5.24-2.947-8.187-8.187-8.187-5.24 0-8.187 2.947-8.187 8.187 0 5.24 2.947 8.187 8.187 8.187z'
        // stroke="#DFDFE2"
        stroke={theme.colors.svg.secondary.bg}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.999 10.73c1.763 0 2.755-.991 2.755-2.755 0-1.763-.992-2.755-2.755-2.755s-2.755.992-2.755 2.755c0 1.764.992 2.756 2.755 2.756z'
        // stroke="#DFDFE2"
        stroke={theme.colors.svg.secondary.bg}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};
