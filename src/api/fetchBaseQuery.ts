import { fetchBaseQuery as fetchBaseQueryCall } from '@reduxjs/toolkit/query/react';

const fetchBaseQuery = () =>
  fetchBaseQueryCall({
    baseUrl: import.meta.env.BASE_URL,
  });

export default fetchBaseQuery;
