import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { appStateActions } from 'bl-modules/app-state';

export const useAppActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => ({
      appStateActions: bindActionCreators(appStateActions, dispatch),
    }),
    [dispatch],
  );
};
