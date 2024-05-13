// src/Services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BrandApi = createApi({
    reducerPath: 'BrandApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: (builder) => ({
        registerBrand: builder.mutation({
            query: (data) => ({
                url: `brand-register`,
                method: "POST",
                body: data
            }),
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: `brand-verify`,
                method: "POST",
                body: data
            }),
        }),
        resendOtp: builder.mutation({
            query: (data) => ({
                url: `resend-otp`,
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const {
    useRegisterBrandMutation,
    useVerifyOtpMutation,
    useResendOtpMutation
} = BrandApi;



