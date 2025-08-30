import { store } from "@/redux/store";
import axios from "axios";

let accessToken: string | null = null;

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach access token
API.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.accessToken || accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// Handle 401 & refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/refresh-token`,
          { refresh_token: state.auth.refreshToken }
        );

        accessToken = data.access_token;
        // store.dispatch(setToken(accessToken));

        API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        return API(originalRequest);
      } catch (err) {
        console.error("Refresh failed", err);
        accessToken = null;
        window.location.href = "/auth/sign-in";
      }
    }

    return Promise.reject(error);
  }
);

export const setAccessToken = (token: string) => {
  accessToken = token;
  //   store.dispatch(setToken(token));
};

export default API;
