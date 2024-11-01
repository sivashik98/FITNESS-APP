import { FC } from 'react';
import { SvgProps } from 'svg/types';
import { APP_COLORS } from 'app/theme';
import Svg, { Circle, Path } from 'react-native-svg';

export const CheckInCircleSvg: FC<SvgProps> = ({ size = 20, color = APP_COLORS.white, ...props }) => (
  <Svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <Circle cx={10} cy={10} r={9.1} stroke={color} strokeWidth={1.8} />
    <Path d='M6 9.5l3 3L14.5 7' stroke={color} strokeWidth={1.8} />
  </Svg>
);
