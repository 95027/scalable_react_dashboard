import api from "../lib/axios";
import type { ApiMessageResponse, ApiResponse } from "../types/api.types";
import type { User } from "../types/user.types";

type LoginRequest = {
  email: string;
  password: string;
};

const login = async (data: LoginRequest): Promise<ApiMessageResponse> => {
  const res = await api.post<ApiMessageResponse>("/auth/login", data);
  return res.data;
};

const getAuthUser = async (): Promise<ApiResponse<User>> => {
  const res = await api.get<ApiResponse<User>>("/user/me");
  return res.data;
};

const logout = async (): Promise<ApiMessageResponse> => {
  const res = await api.post<ApiMessageResponse>("/auth/logout");
  return res.data;
};

const authService = {
  login,
  getAuthUser,
  logout,
};

export default authService;
