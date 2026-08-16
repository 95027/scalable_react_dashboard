import type { ReactNode } from "react";

export interface DataTableColumn<T> {
    key: string;
    header: string;
    className?: string;
    render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    getRowKey: (row: T) => string | number;
    loading?: boolean;
    emptyMessage?: string;
    errorMessage?: string | null;
    onRowClick?: (row: T) => void;
}

const DataTable = <T,>({
    data,
    columns,
    getRowKey,
    loading = false,
    emptyMessage = "No data found.",
    errorMessage,
    onRowClick,
}: DataTableProps<T>) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-max text-sm">
                <thead>
                    <tr className="border-b border-border bg-secondary/40">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                scope="col"
                                className={`px-5 py-3 text-left font-medium text-muted-foreground ${column.className ?? ""
                                    }`}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-border">

                    {
                        loading ? (<tr>
                            <td
                                colSpan={columns.length}
                                className="px-5 py-10 text-center text-muted-foreground"
                            >
                                Loading...
                            </td>
                        </tr>) : (errorMessage ? (<tr>
                            <td
                                colSpan={columns.length}
                                className="px-5 py-10 text-center text-danger text-destructive"
                            >
                                {errorMessage}
                            </td>
                        </tr>) : (data.length === 0) ? (<tr>
                            <td
                                colSpan={columns.length}
                                className="px-5 py-10 text-center text-muted-foreground"
                            >
                                {emptyMessage}
                            </td>
                        </tr>) : (
                            data.map((row) => (<tr
                                key={getRowKey(row)}
                                onClick={() => onRowClick?.(row)}
                                className={`transition hover:bg-secondary/30 ${onRowClick ? "cursor-pointer" : ""
                                    }`}
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={`px-5 py-4 ${column.className ?? ""
                                            }`}
                                    >
                                        {column.render(row)}
                                    </td>
                                ))}
                            </tr>))
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;