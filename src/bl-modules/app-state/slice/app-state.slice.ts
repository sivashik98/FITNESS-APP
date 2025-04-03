import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppStateType, ThemeTypes } from './types';

const initialState: AppStateType = {
  isAuthorized: false,
  theme: ThemeTypes.system,
  refreshToken: '',
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsAuthorized: (state, { payload }: PayloadAction<AppStateType['isAuthorized']>) => {
      state.isAuthorized = payload;
    },
    setTheme: (state, { payload }: PayloadAction<AppStateType['theme']>) => {
      state.theme = payload;
    },
    setRefreshToken: (state, { payload }: PayloadAction<AppStateType['refreshToken']>) => {
      state.refreshToken = payload;
    },
    clear: (state) => {
      state.refreshToken = '';
      state.isAuthorized = false;
    },
  },
});

export const { actions: appStateActions, reducer: appStateReducer } = appStateSlice;
