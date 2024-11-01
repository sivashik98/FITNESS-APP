import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'app/api/endpoints/user/types';

const initialState: User = {
  id: '',
  birthday: '',
  email: '',
  phone: '',
  first_name: '',
  last_name: '',
  surname: '',
  gender: '',
  isFullyRegistered: false,
};

export const userInfoSlice = createSlice({
  name: 'user-info',
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<User['email']>) => {
      state.email = payload;
    },
    setPhone: (state, { payload }: PayloadAction<User['phone']>) => {
      state.phone = payload;
    },
    clear: () => initialState,
  },
});

export const { actions: userInfoActions, reducer: userInfoReducer } = userInfoSlice;
