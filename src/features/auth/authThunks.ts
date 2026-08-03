import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (__, { rejectWithValue }) => {
    try {
      const response = await authService.getAuthUser();
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ??
          error.message ??
          "Authentication failed",
      );
    }
  },
);
