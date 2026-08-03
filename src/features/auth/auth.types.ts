export type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};
