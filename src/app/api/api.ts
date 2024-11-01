import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

// import { delay } from 'tools/utils';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://45.142.44.188/api/',
  // prepareHeaders: (headers) => {
  //   headers.set('Content-Type', 'application/json');
  //   return headers;
  // },
});

// export const baseQueryWithDelay = async (args: FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//   // await delay(2000);
//   // console.log(`${process.env.EXPO_PUBLIC_API_URL}${args.url}`);
//   console.log(extraOptions);
//   return baseQuery(args, api, extraOptions);
// };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
