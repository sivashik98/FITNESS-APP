import { RouteProp, useRoute } from '@react-navigation/native';
import { RootNavigationParams } from 'ui/navigation/root/types';

export const useHybridAuthNavigation = () => {
  const { tab, shouldHideSegmentControl, title, canGoBack, type } = useRoute<RouteProp<RootNavigationParams, 'HybridAuthScreen'>>()?.params;

  return { tab, shouldHideSegmentControl, title, canGoBack, type };
};
