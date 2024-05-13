// src/Services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (data) => ({
                url: `login`,
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const {
    useLoginMutation
} = AuthApi;



