import { FC, ReactNode } from 'react';

import { useAppSelector } from 'app/store/store';
import { UIView } from 'ui/components';

type LoaderProviderProps = {
  children: ReactNode;
};

export const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const queries = useAppSelector((state) => state.api.queries);
  const mutations = useAppSelector((state) => state.api.mutations);
  const isAnyQueryPending = Object.values(queries).some((query) => query?.status === 'pending');
  const isAnyMutationsPending = Object.values(mutations).some((mutation) => mutation?.status === 'pending');

  return (
    <UIView style={{ flex: 1 }} animated animate={{ opacity: isAnyQueryPending || isAnyMutationsPending ? 0.5 : 1 }}>
      {children}
    </UIView>
  );
};
