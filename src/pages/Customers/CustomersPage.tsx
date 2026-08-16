import { useState } from "react";

import PageHeader from "../../components/ui/PageHeader";
import DataTableToolbar from "../../components/ui/DataTable/DataTableToolbar";
import DataTable from "../../components/ui/DataTable/DataTable";


import customerService from "../../services/customer.service";

import type {
  CustomerQueryParams,
} from "../../types/customer.types";

import { customerColumns } from "./Components/customerColumns";
import StatusFilter from "./Components/StatusFilter";
import DataTablePagination from "../../components/ui/DataTable/DataTablePagination";
import useDebounce from "../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getErrorMessage } from "../../utils/error";

export type CustomerStatus = "all" | "active" | "inactive";

const CustomersPage = () => {

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<CustomerStatus>("all");


  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  const debounceSearch = useDebounce(search, 500);

  const params: CustomerQueryParams = {
    page: pagination.page,
    limit: pagination.limit,
    search: debounceSearch || undefined,
    isActive: status === "all" ? undefined : status === 'active',
  }

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["customers", params],
    queryFn: () => customerService.getCustomers(params)
  });

  const customers = data?.data?.data ?? [];
  const responsePagination = data?.data?.pagination;

  const handleSearchChange = (value: string) => {
    setSearch(value);

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  const handleStatusChange = (value: CustomerStatus) => {
    setStatus(value);

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleLimitChange = (limit: number) => {
    setPagination((prev) => ({
      ...prev,
      page: 1,
      limit,
    }));
  };

  return (
    <div className="space-y-6">

      <PageHeader
        title="Customers"
        description="Manage and monitor your logistics customers."
      />

      <div className="overflow-hidden rounded-lg border border-border bg-card">

        <DataTableToolbar
          search={{
            value: search,
            onChange: handleSearchChange,
            placeholder: "Search customers...",
          }}
          filters={
            <StatusFilter
              value={status}
              onChange={handleStatusChange}
            />
          }
        />

        <DataTable
          data={customers}
          columns={customerColumns}
          getRowKey={(customer) => customer.id}
          loading={isLoading}
          emptyMessage="No customers found."
          errorMessage={isError && getErrorMessage(error)}
        />

        <DataTablePagination
          page={responsePagination?.page ?? pagination.page}
          limit={responsePagination?.limit ?? pagination.limit}
          total={responsePagination?.total ?? 0}
          totalPages={responsePagination?.totalPages ?? 0}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
    </div>
  );
};

export default CustomersPage;