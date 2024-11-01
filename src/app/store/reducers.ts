import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'app/api';

import { userInfoReducer } from 'bl-modules/user/user-info';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  userInfoReducer,
});
