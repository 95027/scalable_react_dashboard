import api from "../lib/axios";
import type {
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

const updateCustomerStatus = async (id: number): Promise<CustomerResponse> => {
  const response = await api.patch<CustomerResponse>(`/user/${id}/status`);
  return response.data;
};

const customerService = {
  getCustomers,
  updateCustomerStatus,
};

export default customerService;
