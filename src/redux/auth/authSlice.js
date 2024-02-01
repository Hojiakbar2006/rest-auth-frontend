import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isLogedIn = action.payload.isLogedIn;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem(
      //   "isLogedIn",
      //   JSON.stringify(action.payload.isLogedIn)
      // );
      // localStorage.setItem("access_token", action.payload.access_token);
      // localStorage.setItem("refresh_token", action.payload.access_token);
    },
    resetUser: (state) => {
      state.user = null;
      state.isLogedIn = false;
      state.token = null;
      // localStorage.removeItem("isLogedIn");
      // localStorage.removeItem("access_token");
      // localStorage.removeItem("refresh_token");
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
