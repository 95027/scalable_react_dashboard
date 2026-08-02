import api from "../lib/axios";

type LoginRequest = {
  email: string;
  password: string;
};

const login = (data: LoginRequest) => {
  return api.post("/auth/login", data);
};

const authService = {
  login,
};

export default authService;
