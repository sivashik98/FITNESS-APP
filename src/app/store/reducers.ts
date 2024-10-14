import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'app/api';

import { signUpReducer } from 'bl-modules/auth/sign-up';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  signUpReducer,
});
