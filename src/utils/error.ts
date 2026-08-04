import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown) => {
  console.error(error);
  if (error instanceof AxiosError) {
    const data = error?.response?.data;
    return (
      data?.message ||
      data?.errors?.[0]?.message ||
      error?.message ||
      "Something went wrong"
    );
  }

  return "Something went wrong";
};
