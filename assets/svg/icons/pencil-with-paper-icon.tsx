import { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';

export const PencilWithPaperIconSvg: FC<SvgProps> = ({ size = 16, color = APP_COLORS.grayishBlue, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <G clipPath='url(#clip0_1584_2479)' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
      <Path d='M6.291 3.13c-.923.042-1.827.141-2.709.243a2.222 2.222 0 00-1.947 1.953c-.127 1.144-.25 2.327-.25 3.537s.123 2.394.25 3.539a2.223 2.223 0 001.947 1.95c1.15.133 2.34.265 3.555.265 1.217 0 2.406-.132 3.556-.265a2.222 2.222 0 001.946-1.95c.101-.84.176-1.682.225-2.526' />
      <Path d='M11.298 1.955L7.388 6.39l-.535 2.52c-.087.406.337.79.732.665l2.507-.788 4.039-4.25c.671-.705.553-1.886-.258-2.605-.793-.7-1.945-.692-2.575.022v0z' />
    </G>
    <Defs>
      <ClipPath id='clip0_1584_2479'>
        <Path fill='#fff' d='M0 0H16V16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
