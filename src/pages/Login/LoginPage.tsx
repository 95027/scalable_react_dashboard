import React, { useState } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getErrorMessage } from "../../utils/error";
import { useAppDispatch } from "../../hooks/redux";
import { checkAuth } from "../../features/auth/authThunks";

type LoginFormData = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "admin@example.com",
    password: "password",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await authService.login(formData);
      if (res.data.success) {
        await dispatch(checkAuth()).unwrap();
        toast.success("Login successful...");
        navigate("/");
      }
    } catch (error) {
      toast.error(getErrorMessage(error));

    } finally {
      setIsLoading(false);
    }


  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Admin Portal</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access the admin dashboard.
          </p>
        </div>

        <form className="space-y-5" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              className="w-full rounded-md border border-input bg-surface px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
              autoComplete="email"
              onChange={onChangeHandler}
              value={formData.email}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-input bg-surface px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
              autoComplete="current-password"
              value={formData.password}
              onChange={onChangeHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}

          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
