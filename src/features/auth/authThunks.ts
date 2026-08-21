import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import { getErrorMessage } from "../../utils/error";

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (__, { rejectWithValue }) => {
    try {
      const response = await authService.getAuthUser();
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (__, { rejectWithValue }) => {
    try {
      await authService.logout();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);
