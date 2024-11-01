import { RouteProp, useRoute } from '@react-navigation/native';

import { RootNavigationParams } from 'ui/navigation/root/types';

export const useCodeConfirmNavigation = () => {
  const { authMethod } = useRoute<RouteProp<RootNavigationParams, 'CodeConfirmScreen'>>()?.params;

  return { authMethod };
};
