// src/Services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const InfluencerApi = createApi({
    reducerPath: 'InfluencerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: (builder) => ({
        registerInfluencer: builder.mutation({
            query: (data) => ({
                url: `influencer-register`,
                method: "POST",
                body: data
            }),
        }),
        influencerVerifyOtp: builder.mutation({
            query: (data) => ({
                url: `influencer-verify`,
                method: "POST",
                body: data
            }),
        }),
        influencerResendOtp: builder.mutation({
            query: (data) => ({
                url: `influencer-resend-otp`,
                method: "POST",
                body: data
            }),
        }),
        createInfluencerProfile: builder.mutation({
            query: (data) => ({
                url: `create-profile`,
                method: "POST",
                body: data
            }),
        })
    }),
});

export const {
    useRegisterInfluencerMutation,
    useInfluencerVerifyOtpMutation,
    useInfluencerResendOtpMutation,
    useCreateInfluencerProfileMutation
} = InfluencerApi;



