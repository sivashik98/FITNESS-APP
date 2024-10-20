import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { FC } from 'react';

import { APP_COLORS } from 'app/theme/colors';
import { SvgProps } from 'svg/types';

export const CrownIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.black, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
        d='M1.59 4.532c.019-.171.231-.213.329-.072l1.638 2.368a1.061 1.061 0 001.81-.107l2.41-4.556a.251.251 0 01.445 0l2.41 4.556a1.061 1.061 0 001.81.107l1.639-2.368c.098-.141.31-.1.328.072.121 1.128.223 2.287.223 3.468s-.102 2.34-.223 3.468a3.323 3.323 0 01-2.92 2.929c-1.136.126-2.301.235-3.49.235-1.187 0-2.353-.109-3.488-.235a3.323 3.323 0 01-2.92-2.929C1.47 10.34 1.367 9.181 1.367 8s.102-2.34.222-3.468z'
        stroke='url(#paint0_linear_291_5987)'
        strokeWidth={1.43}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Defs>
        <LinearGradient id='paint0_linear_291_5987' x1={7.99982} y1={2.03101} x2={11.7586} y2={13.9705} gradientUnits='userSpaceOnUse'>
          <Stop offset={0.315973} stopColor='#8A15FF' />
          <Stop offset={1} stopColor='#9F4DF1' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
