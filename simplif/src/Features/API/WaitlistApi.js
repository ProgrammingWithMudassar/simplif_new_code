// src/Services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const WaitlistApi = createApi({
    reducerPath: 'WaitlistApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://simplifserver.onrender.com/api/' }),
    endpoints: (builder) => ({
        Waitlist: builder.mutation({
            query: (data) => ({
                url: `waitlist`,
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const {
    useWaitlistMutation
} = WaitlistApi;



