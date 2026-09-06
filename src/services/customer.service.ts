import api from "../lib/axios";
import type {
  CreateCustomerRequest,
  CustomerListResponse,
  CustomerQueryParams,
  CustomerResponse,
} from "../types/customer.types";

const getCustomers = async (
  params?: CustomerQueryParams,
): Promise<CustomerListResponse> => {
  const response = await api.get<CustomerListResponse>("/customer", { params });
  return response.data;
};

const createCustomer = async (
  data: CreateCustomerRequest,
): Promise<CustomerResponse> => {
  const response = await api.post<CustomerResponse>("/customer/create", data);
  return response.data;
};

const updateCustomerStatus = async (id: string): Promise<CustomerResponse> => {
  const response = await api.patch<CustomerResponse>(`/user/${id}/status`);
  return response.data;
};

const customerService = {
  getCustomers,
  updateCustomerStatus,
  createCustomer,
};

export default customerService;
