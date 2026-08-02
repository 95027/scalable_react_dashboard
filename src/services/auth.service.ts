import api from "../lib/axios";

type LoginRequest = {
  email: string;
  password: string;
};

const login = (data: LoginRequest) => {
  return api.post("/auth/login", data);
};

const getAuthUser = () => {
  return api.get("/user/me");
};

const logout = () => {
  return api.post("/auth/logout");
};

const authService = {
  login,
  getAuthUser,
  logout,
};

export default authService;
