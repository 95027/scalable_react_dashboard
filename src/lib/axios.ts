import axios, { AxiosError } from "axios";
import { store } from "../app/store";
import { clearUser } from "../features/auth/authSlice";

const api = axios.create({
  baseURL: "api/v1",
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      store.dispatch(clearUser());
    }
    return Promise.reject(error);
  },
);

export default api;
