import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';

export const QuestionMarkIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.grayishBlue, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <G clipPath='url(#clip0_1264_13856)'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 6A6 6 0 110 6a6 6 0 0112 0zM4.929 4.5A1.071 1.071 0 116 5.571a.643.643 0 00-.643.643v.554a.643.643 0 101.286 0 2.358 2.358 0 10-3-2.268.643.643 0 001.286 0zM6.857 9a.857.857 0 11-1.714 0 .857.857 0 011.714 0z'
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id='clip0_1264_13856'>
        <Path fill='#fff' d='M0 0H12V12H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
