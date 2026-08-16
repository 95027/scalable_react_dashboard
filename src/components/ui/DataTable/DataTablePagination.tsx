import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface DataTablePaginationProps {
    page: number;
    limit: number;
    total: number;
    totalPages: number;

    onPageChange: (page: number) => void;
    onLimitChange?: (limit: number) => void;

    pageSizeOptions?: number[];
}

const DataTablePagination = ({
    page,
    limit,
    total,
    totalPages,
    onPageChange,
    onLimitChange,
    pageSizeOptions = [10, 25, 50, 100],
}: DataTablePaginationProps) => {
    const start = total === 0
        ? 0
        : (page - 1) * limit + 1;

    const end = Math.min(page * limit, total);

    const canGoPrevious = page > 1;
    const canGoNext = page < totalPages && totalPages > 0;

    const handlePrevious = () => {
        if (canGoPrevious) {
            onPageChange(page - 1);
        }
    };

    const handleNext = () => {
        if (canGoNext) {
            onPageChange(page + 1);
        }
    };

    return (
        <div className="flex flex-col gap-3 border-t border-border px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Results */}
            <div className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                    {start}
                </span>
                –
                <span className="font-medium text-foreground">
                    {end}
                </span>{" "}
                of{" "}
                <span className="font-medium text-foreground">
                    {total}
                </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
                {onLimitChange && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                            Rows
                        </span>

                        <select
                            aria-label="Rows per page"
                            value={limit}
                            onChange={(event) =>
                                onLimitChange(
                                    Number(event.target.value)
                                )
                            }
                            className="
                                h-9 rounded-md
                                border border-input
                                bg-background
                                px-2 text-sm
                                text-foreground
                                outline-none
                                focus:border-primary
                                focus:ring-2
                                focus:ring-ring/20
                            "
                        >
                            {pageSizeOptions.map((option) => (
                                <option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Page indicator */}
                <span className="text-sm text-muted-foreground">
                    {totalPages > 0 ? (
                        <>
                            Page{" "}
                            <span className="font-medium text-foreground">
                                {page}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-foreground">
                                {totalPages}
                            </span>
                        </>
                    ) : (
                        "No pages"
                    )}
                </span>

                {/* Navigation */}
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={!canGoPrevious}
                        aria-label="Previous page"
                        className="
                            rounded-md p-2
                            text-muted-foreground
                            transition
                            hover:bg-secondary
                            hover:text-foreground
                            disabled:cursor-not-allowed
                            disabled:opacity-40
                        "
                    >
                        <ChevronLeft size={17} />
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canGoNext}
                        aria-label="Next page"
                        className="
                            rounded-md p-2
                            text-muted-foreground
                            transition
                            hover:bg-secondary
                            hover:text-foreground
                            disabled:cursor-not-allowed
                            disabled:opacity-40
                        "
                    >
                        <ChevronRight size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTablePagination;