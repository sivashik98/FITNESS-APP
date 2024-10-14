import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISignUpSlice, SignUpTypes } from './types';

const initialState: ISignUpSlice = {
  currentTab: SignUpTypes.PHONE,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setCurrentTab: (state, { payload }: PayloadAction<ISignUpSlice['currentTab']>) => {
      state.currentTab = payload;
    },
  },
});

export const { actions: signUpActions, reducer: signUpReducer } = signUpSlice;
