// src/Services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AllUserDataApi = createApi({
    reducerPath: 'AllUserDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: (builder) => ({
        allUserData: builder.query({
            query: () => ({
                url: `allUsers`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useAllUserDataQuery
} = AllUserDataApi;



