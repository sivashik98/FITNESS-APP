import { FC, ReactNode, useState } from 'react';

import { Splash } from 'ui/components';

interface SplashProviderProps {
  children: ReactNode;
}

export const SplashProvider: FC<SplashProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) return <Splash setIsReady={setIsReady} />;

  return children;
};
