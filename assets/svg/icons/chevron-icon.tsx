import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { FC } from 'react';

import { APP_COLORS } from 'app/theme/colors';
import { SvgProps } from 'svg/types';

export const ChevronIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.black, ...props }) => {
  return (
    <Svg width={size / 2} height={size} viewBox='0 0 8 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path d='M4.47 15.258L.169 7.846 4.453.434h3.383L3.433 7.846l4.403 7.412H4.47z' fill='#1C1E28' />
    </Svg>
  );
};
