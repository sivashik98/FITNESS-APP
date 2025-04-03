import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';

export const CalendarIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.grayishBlue, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <G clipPath='url(#clip0_1351_7351)'>
      <G clipPath='url(#clip1_1351_7351)' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
        <Path d='M4.816 6.991h.531M4.816 10.175h.531M7.735 6.991h.531M10.654 6.991h.531M7.735 10.175h.531M1.842 11.742c.171 1.527 1.413 2.74 2.948 2.814 1.062.052 2.146.078 3.323.078s2.26-.026 3.322-.078c1.536-.073 2.777-1.286 2.949-2.814.115-1.03.21-2.084.21-3.159 0-1.074-.095-2.129-.21-3.158-.171-1.528-1.413-2.74-2.949-2.815a68.384 68.384 0 00-3.322-.077c-1.177 0-2.261.026-3.323.077-1.535.074-2.777 1.287-2.948 2.815-.116 1.03-.21 2.084-.21 3.158 0 1.075.094 2.13.21 3.159zM5.085 1.366V4.02M10.919 1.366V4.02' />
      </G>
    </G>
    <Defs>
      <ClipPath id='clip0_1351_7351'>
        <Path fill='#fff' d='M0 0H16V16H0z' />
      </ClipPath>
      <ClipPath id='clip1_1351_7351'>
        <Path fill='#fff' d='M0 0H16V16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
