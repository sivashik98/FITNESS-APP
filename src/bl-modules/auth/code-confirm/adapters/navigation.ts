import { RouteProp, useRoute } from '@react-navigation/native';

import { RootNavigationParams } from 'ui/navigation/root/types';

export const useCodeConfirmNavigation = () => {
  const { method, type, data } = useRoute<RouteProp<RootNavigationParams, 'CodeConfirmScreen'>>()?.params;

  return { method, type, data };
};
