import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown) => {
  console.error(error);
  if (error instanceof AxiosError) {
    return (
      error?.response?.data?.message || error?.message || "Something went wrong"
    );
  }

  return "Something went wrong";
};
