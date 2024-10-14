import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { signUpActions } from 'bl-modules/auth/sign-up';

export const useAppActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => ({
      signUpActions: bindActionCreators(signUpActions, dispatch),
    }),
    [dispatch]
  );
};
