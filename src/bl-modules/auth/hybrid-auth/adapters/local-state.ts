import { useState } from 'react';

export const useHybridAuthLocalState = () => {
  const [tab, setTab] = useState<'phone' | 'email'>('email');

  const onChangeTab = (index: number) => setTab(index === 0 ? 'email' : 'phone');

  return { tab, onChangeTab };
};
