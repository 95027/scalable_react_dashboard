import api from "../lib/axios";
import type {
  CustomerListResponse,
  CustomerQueryParams,
} from "../types/customer.types";

const getCustomers = (params?: CustomerQueryParams) => {
  return api.get<CustomerListResponse>("/customer", { params });
};

const updateCustomerStatus = (id: number) => {
  return api.patch(`/user/${id}/status`);
};

const customerService = {
  getCustomers,
  updateCustomerStatus,
};

export default customerService;
