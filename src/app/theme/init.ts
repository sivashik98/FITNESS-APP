import { Spacings, Typography } from 'react-native-ui-lib';

import { APP_SPACINGS } from 'app/theme/spacings';
import { APP_FONTS } from 'app/theme/fonts';

export const initTheme = () => {
  Spacings.loadSpacings(APP_SPACINGS);
  Typography.loadTypographies(APP_FONTS);
};
