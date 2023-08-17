import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      console.log(headers);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: []
});

export default baseApi;
