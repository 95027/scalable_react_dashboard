import type {
  ApiListResponse,
  ApiResponse,
  PaginationParams,
  SortParams,
} from "./api.types";

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  emailVerified: boolean;
  emailVerifiedAt: string | null;
  phoneVerified: boolean;
  phoneVerifiedAt: string | null;
  lastLoginAt: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerQueryParams extends PaginationParams, SortParams {
  search?: string;
  isActive?: boolean;
}

export type CustomerListResponse = ApiListResponse<Customer>;
export type CustomerResponse = ApiResponse<Customer>;
