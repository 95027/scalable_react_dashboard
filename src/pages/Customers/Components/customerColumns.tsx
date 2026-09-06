import { Eye } from "lucide-react";
import Badge from "../../../components/ui/Badge";
import type { DataTableColumn } from "../../../components/ui/DataTable/DataTable";
import type { Customer } from "../../../types/customer.types";
import ToogleSwitch from "../../../components/ui/ToggleSwitch";

interface CustomerColumnProps {
    onStatusChange: (customer: Customer) => void;
    isUpdating: boolean;
}

export const customerColumns = ({ onStatusChange, isUpdating }: CustomerColumnProps): DataTableColumn<Customer>[] => [
    {
        key: "name",
        header: "Customer",

        render: (customer) => (
            <div>
                <p className="font-medium text-foreground">
                    {customer.user.name}
                </p>

                <p className="text-xs text-muted-foreground">
                    #{customer.customerCode}
                </p>
            </div>
        ),
    },

    {
        key: "email",
        header: "Email",

        render: (customer) => (
            <span className="text-foreground">
                {customer.user.email}
            </span>
        ),
    },

    {
        key: "phone",
        header: "Phone",

        render: (customer) => (
            <span className="text-muted-foreground">
                {customer.user.phone ?? "—"}
            </span>
        ),
    },

    {
        key: "emailVerified",
        header: "Email Verified",

        render: (customer) => (
            <Badge
                variant={
                    customer.user.emailVerified
                        ? "success"
                        : "warning"
                }
            >
                {customer.user.emailVerified
                    ? "Verified"
                    : "Unverified"}
            </Badge>
        ),
    },

    {
        key: "status",
        header: "Status",

        render: (customer) => (
            <ToogleSwitch checked={customer.user.isActive} disabled={isUpdating} onCheckedChange={() => onStatusChange(customer)} />
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