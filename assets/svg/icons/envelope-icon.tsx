import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';

export const EnvelopeIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.grayishBlue, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <G clipPath='url(#clip0_1351_1917)' stroke={color} strokeWidth={1.4} strokeLinecap='round' strokeLinejoin='round'>
      <Path d='M1.666 11.754A2.22 2.22 0 003.63 13.68c1.41.148 2.871.303 4.37.303 1.496 0 2.957-.156 4.368-.303a2.219 2.219 0 001.966-1.926c.15-1.214.3-2.469.3-3.754 0-1.284-.15-2.54-.3-3.754a2.22 2.22 0 00-1.966-1.927c-1.41-.146-2.872-.301-4.369-.301-1.496 0-2.958.156-4.369.303a2.218 2.218 0 00-1.965 1.926c-.151 1.213-.3 2.469-.3 3.753 0 1.284.149 2.54.3 3.754z' />
      <Path d='M1.695 3.971l4.991 3.936a2.123 2.123 0 002.628 0l4.991-3.936' />
    </G>
    <Defs>
      <ClipPath id='clip0_1351_1917'>
        <Path fill='#fff' d='M0 0H16V16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
