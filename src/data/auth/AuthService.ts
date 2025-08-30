import API from "../api";

export const login = async (email: string, password: string) => {
  const { data } = await API.post("/auth/login", { email, password });

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);

  return data;
};

export const getProfile = async () => {
  const { data } = await API.get("/auth/profile");
  return data;
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
