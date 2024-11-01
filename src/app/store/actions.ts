import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { userInfoActions } from 'bl-modules/user/user-info';

export const useAppActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => ({
      userInfoActions: bindActionCreators(userInfoActions, dispatch),
    }),
    [dispatch]
  );
};
