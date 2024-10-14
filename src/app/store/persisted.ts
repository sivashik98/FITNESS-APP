import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { rootReducer } from './reducers';
import { api } from 'app/api';

const persistConfig = {
  key: 'app',
  version: 1,
  storage: AsyncStorage,
  blacklist: [api.reducerPath],
  // whitelist: ['favorites', 'basket'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
