import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "auth/register/",
        method: "POST",
        body: userData,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (passcode) => ({
        url: "auth/verify-email/",
        method: "POST",
        body: passcode,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "auth/login/",
        method: "POST",
        body: userData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "auth/password-reset/",
        method: "POST",
        body: email,
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uidb64, token }) => ({
        url: `auth/password-reset-confirm/${uidb64}/${token}/`,
        method: "GET",
      }),
    }),
    setNewPassword: builder.mutation({
      query: (data) => ({
        url: "auth/set-new-password/",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useSetNewPasswordMutation,
} = api;
