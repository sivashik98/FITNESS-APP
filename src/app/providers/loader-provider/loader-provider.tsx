import { FC, ReactNode } from 'react';
import { useAppSelector } from 'app/store/store';

// import { FetchToOpacity } from 'shared/ui/FetchToOpacity';
// import { useAppSelector } from 'src/shared/lib/store/useAppSelector';

type LoaderProviderProps = {
  children: ReactNode;
};

export const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  // const queries = useAppSelector((state) => state.api.queries);
  // const mutations = useAppSelector((state) => state.api.mutations);
  // console.log(mutations);
  // const isAnyQueryPending = Object.values(queries).some((query) => query?.status === 'pending');
  // const isAnyMutationsPending = Object.values(mutations).some((mutation) => mutation?.status === 'pending');
  //
  // return <FetchToOpacity isFetching={isAnyQueryPending || isAnyMutationsPending}>{children}</FetchToOpacity>;

  return children;
};
