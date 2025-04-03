import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'app/api';
import { appStateReducer } from 'bl-modules/app-state';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  appStateReducer,
});
