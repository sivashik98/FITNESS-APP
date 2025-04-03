import { MMKV } from 'react-native-mmkv';
import { LSKeys } from './types';

const storage = new MMKV();

export const LocalStorageService = {
  getString: (key: LSKeys) => storage.getString(key),
  getNumber: (key: LSKeys) => storage.getNumber(key),
  getBoolean: (key: LSKeys) => storage.getBoolean(key),
  set: (key: LSKeys, val: boolean | string | number) => storage.set(key, val),
  delete: (key: LSKeys) => storage.delete(key),
  clearAll: () => storage.clearAll(),
  getAllKeys: () => storage.getAllKeys(),
};
