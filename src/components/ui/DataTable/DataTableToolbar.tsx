import type { ReactNode } from "react";
import { Search } from "lucide-react";

interface DataTableToolbarProps {
    search?: {
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
        ariaLabel?: string;
    };

    filters?: ReactNode;
    actions?: ReactNode;
}

const DataTableToolbar = ({
    search,
    filters,
    actions,
}: DataTableToolbarProps) => {
    const hasRightContent = Boolean(filters || actions);

    if (!search && !hasRightContent) {
        return null;
    }

    return (
        <div className="flex flex-col gap-3 border-b border-border p-4 lg:flex-row lg:items-center lg:justify-between">
            {search && (
                <div className="relative w-full lg:max-w-sm">
                    <Search
                        size={17}
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />

                    <input
                        type="search"
                        value={search.value}
                        onChange={(event) =>
                            search.onChange(event.target.value)
                        }
                        placeholder={search.placeholder ?? "Search..."}
                        aria-label={search.ariaLabel ?? "Search"}
                        className="
                            h-10 w-full rounded-md
                            border border-input
                            bg-background
                            pl-9 pr-3
                            text-sm text-foreground
                            outline-none
                            placeholder:text-muted-foreground
                            focus:border-primary
                            focus:ring-2 focus:ring-ring/20
                        "
                    />
                </div>
            )}

            {hasRightContent && (
                <div className="flex flex-wrap items-center gap-2">
                    {filters}
                    {actions}
                </div>
            )}
        </div>
    );
};

export default DataTableToolbar;