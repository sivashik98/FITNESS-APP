import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FC } from 'react';

import { APP_COLORS } from 'app/theme/colors';
import { SvgProps } from 'svg/types';

export const CloseCircleIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.black, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <G clipPath='url(#clip0_736_2891)'>
        <Path d='M8 16A8 8 0 108 0a8 8 0 000 16z' fill='#DFDFE2' />
        <Path d='M10.609 5.39l-5.218 5.22M5.39 5.39l5.219 5.22' stroke='#86868F' strokeLinecap='round' strokeLinejoin='round' />
      </G>
      <Defs>
        <ClipPath id='clip0_736_2891'>
          <Path fill='#fff' d='M0 0H16V16H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
