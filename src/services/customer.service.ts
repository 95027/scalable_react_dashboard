import api from "../lib/axios";
import type {
  CustomerListResponse,
  CustomerQueryParams,
} from "../types/customer.types";

const getCustomers = (params?: CustomerQueryParams) => {
  return api.get<CustomerListResponse>("/customer", { params });
};

const customerService = {
  getCustomers,
};

export default customerService;
