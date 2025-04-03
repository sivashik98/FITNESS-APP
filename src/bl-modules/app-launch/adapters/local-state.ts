import { useState } from 'react';

import { RootNavigationParams } from 'ui/navigation/root/types';

export const useAppLaunchLocalState = () => {
  const [isStoresHydrated, setIsStoresHydrated] = useState(false);
  const [initialScreen, setInitialScreen] = useState<null | keyof RootNavigationParams>(null);

  return {
    isStoresHydrated,
    setIsStoresHydrated,
    initialScreen,
    setInitialScreen,
  };
};
