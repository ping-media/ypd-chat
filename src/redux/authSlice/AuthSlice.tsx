import { createSlice } from "@reduxjs/toolkit";
import { login } from "../authThunk/AuthThunk";

export interface UserState {
  user: any;
  isLogged: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLogged: false,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      // const { access_token, expires_in, refresh_token, token_type, user } =
      //   action.payload;
      // state.user = user;
      // state.accessToken = access_token;
      // state.refreshToken = refresh_token;
      state.isLogged = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, handleLogin } = authSlice.actions;
export default authSlice.reducer;
