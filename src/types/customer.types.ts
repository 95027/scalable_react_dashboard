import type {
  ApiListResponse,
  ApiResponse,
  PaginationParams,
  SortParams,
} from "./api.types";
import type { User } from "./user.types";

export interface Customer {
  id: string;
  userId: string;
  customerCode: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerQueryParams extends PaginationParams, SortParams {
  search?: string;
  isActive?: boolean;
}

export type CustomerListResponse = ApiListResponse<Customer>;
export type CustomerResponse = ApiResponse<User>;

export interface CreateCustomerRequest {
  name: string;
  email: string;
  phone: string;
}
