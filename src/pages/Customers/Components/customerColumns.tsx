import { Eye } from "lucide-react";
import Badge from "../../../components/ui/Badge";
import type { DataTableColumn } from "../../../components/ui/DataTable/DataTable";
import type { Customer } from "../../../types/customer.types";

export const customerColumns: DataTableColumn<Customer>[] = [
    {
        key: "name",
        header: "Customer",

        render: (customer) => (
            <div>
                <p className="font-medium text-foreground">
                    {customer.name}
                </p>

                <p className="text-xs text-muted-foreground">
                    #{customer.id}
                </p>
            </div>
        ),
    },

    {
        key: "email",
        header: "Email",

        render: (customer) => (
            <span className="text-foreground">
                {customer.email}
            </span>
        ),
    },

    {
        key: "phone",
        header: "Phone",

        render: (customer) => (
            <span className="text-muted-foreground">
                {customer.phone ?? "—"}
            </span>
        ),
    },

    {
        key: "emailVerified",
        header: "Email Verified",

        render: (customer) => (
            <Badge
                variant={
                    customer.emailVerified
                        ? "success"
                        : "warning"
                }
            >
                {customer.emailVerified
                    ? "Verified"
                    : "Unverified"}
            </Badge>
        ),
    },

    {
        key: "status",
        header: "Status",

        render: (customer) => (
            <Badge
                variant={
                    customer.isActive
                        ? "success"
                        : "danger"
                }
            >
                {customer.isActive
                    ? "Active"
                    : "Inactive"}
            </Badge>
        ),
    },

    {
        key: "actions",
        header: "Actions",
        className: "text-right",

        render: () => (
            <button
                type="button"
                className="
                    inline-flex items-center gap-1.5
                    rounded-md px-3 py-1.5
                    text-xs font-medium
                    text-primary
                    transition
                    hover:bg-primary/10
                "
            >
                <Eye size={15} />
            </button>
        ),
    },
];