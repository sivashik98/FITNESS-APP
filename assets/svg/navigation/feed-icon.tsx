import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { FC } from 'react';

import { APP_COLORS } from 'app/theme/colors';
import { SvgProps } from 'svg/types';
import { useStyles } from 'react-native-unistyles';

export const FeedIconSvg: FC<SvgProps> = ({ size = 20, color = APP_COLORS.black, ...props }) => {
  const { theme } = useStyles();
  return (
    <Svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
        d='M14.036 14.561c.126-1.508.24-3.083.24-4.56 0-2.062-.22-4.064-.39-5.976A1.375 1.375 0 0012.7 2.789c-1.52-.208-3.106-.47-4.737-.47-1.632 0-3.218.262-4.738.47-.633.087-1.128.6-1.184 1.236-.17 1.912-.39 3.914-.39 5.975 0 1.67.144 3.302.29 4.878a2.781 2.781 0 002.376 2.487c1.182.164 2.4.317 3.646.317 1.644 0 3.851-.063 5.468-.162.82-.05 1.64-.112 2.459-.18a2.472 2.472 0 002.272-2.324c.123-2.26.171-4.682.183-7.05a1.321 1.321 0 00-1.323-1.327h-2.904'
        // stroke="#DFDFE2"
        stroke={theme.colors.svg.secondary.bg}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.281 9.284a.692.692 0 00.621.59c.68.06 1.389.133 2.117.133s1.436-.073 2.116-.133a.692.692 0 00.621-.59c.071-.49.147-.997.147-1.519 0-.521-.076-1.03-.147-1.519a.692.692 0 00-.621-.59c-.68-.06-1.388-.132-2.116-.132-.728 0-1.437.073-2.117.133a.692.692 0 00-.62.589c-.072.49-.147.998-.147 1.52 0 .52.075 1.029.146 1.518zM10.416 13.276H5.554'
        // stroke="#DFDFE2"
        stroke={theme.colors.svg.secondary.bg}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};
