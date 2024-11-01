import { useState } from 'react';

type AuthTabs = {
  type: 'phone' | 'email';
  index: 0 | 1;
};

export const useHybridAuthLocalState = () => {
  const [tab, setTab] = useState<AuthTabs>({ type: 'email', index: 0 });

  return { tab, setTab };
};
