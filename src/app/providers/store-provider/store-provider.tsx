import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = (props: StoreProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
