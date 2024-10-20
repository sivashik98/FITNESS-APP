import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { delay } from 'tools/utils';

const baseQuery = fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

export const baseQueryWithDelay = async (args: FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  await delay(2000);
  return baseQuery(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithDelay,
  endpoints: () => ({}),
});

// export hooks
export const {} = api;
