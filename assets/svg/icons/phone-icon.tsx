import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';

export const PhoneIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.grayishBlue, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <G clipPath='url(#clip0_1351_4427)'>
      <Path
        d='M10.31 2.141c.753-.633 1.877-.541 2.448.259.153.213.335.468.648.86a3.723 3.723 0 01-.006 4.634c-.799.99-1.635 1.988-2.571 2.923-.936.936-1.935 1.773-2.924 2.572a3.724 3.724 0 01-4.635.005c-.417-.333-.678-.515-.899-.673-.772-.552-.88-1.634-.277-2.367.477-.58 1.009-1.132 1.52-1.672.408-.43 1.09-.458 1.553-.089.124.1.28.23.592.525 1.54-.914 2.473-1.858 3.37-3.37a9.563 9.563 0 01-.53-.598c-.369-.463-.34-1.142.091-1.546.528-.493 1.064-.998 1.62-1.463z'
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_1351_4427'>
        <Path fill='#fff' d='M0 0H16V16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
