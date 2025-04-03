import { useState } from 'react';

import { useHybridAuthNavigation } from 'bl-modules/auth/hybrid-auth/adapters/navigation';

export type AuthTabs = {
  type: 'phone' | 'email';
  index: 0 | 1;
};

export const useHybridAuthLocalState = (navigation: ReturnType<typeof useHybridAuthNavigation>) => {
  const [tab, setTab] = useState<AuthTabs>(navigation.tab || { type: 'email', index: 0 });

  return { tab, setTab };
};
