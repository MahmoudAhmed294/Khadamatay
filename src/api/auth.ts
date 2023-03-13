import { createApi } from '@reduxjs/toolkit/query/react';
import fetchBaseQuery from './fetchBaseQuery';

export type AuthUser = {
  id: string;
  name: string;
};

export type AuthScope = {
  id: string;
  role: string;
};

export type LoginResponse = {
  user: AuthUser;
  scope: AuthScope;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (payload) => ({
        url: `/login`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
