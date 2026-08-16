import { useEffect, useState } from "react";

import PageHeader from "../../components/ui/PageHeader";
import DataTableToolbar from "../../components/ui/DataTable/DataTableToolbar";
import DataTable from "../../components/ui/DataTable/DataTable";


import customerService from "../../services/customer.service";
import { getErrorMessage } from "../../utils/error";

import type {
  Customer,
  CustomerQueryParams,
} from "../../types/customer.types";

import { customerColumns } from "./Components/customerColumns";
import StatusFilter from "./Components/StatusFilter";
import type { Pagination } from "../../types/api.types";
import DataTablePagination from "../../components/ui/DataTable/DataTablePagination";
import useDebounce from "../../hooks/useDebounce";

export type CustomerStatus = "all" | "active" | "inactive";

const CustomersPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<CustomerStatus>("all");

  const [error, setError] = useState<string | null>(null);

  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(false);
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);

        const params: CustomerQueryParams = {
          page: pagination.page,
          limit: pagination.limit,
          search: debounceSearch || undefined,
          isActive:
            status === "all"
              ? undefined
              : status === "active",
        };

        const { data: response } =
          await customerService.getCustomers(params);

        setCustomers(response.data);
        setPagination(response.pagination);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [
    pagination.page,
    pagination.limit,
    debounceSearch,
    status,
  ]);

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
          loading={loading}
          emptyMessage="No customers found."
          errorMessage={error}
        />

        <DataTablePagination
          page={pagination.page}
          limit={pagination.limit}
          total={pagination.total}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
    </div>
  );
};

export default CustomersPage;