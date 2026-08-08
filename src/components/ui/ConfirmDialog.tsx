import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { X } from "lucide-react";

interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
}

const ConfirmDialog = ({
    open,
    onOpenChange,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
}: ConfirmDialogProps) => {
    return (
        <AlertDialog.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 z-50 bg-overlay" />

                <AlertDialog.Content
                    className="
                        fixed left-1/2 top-1/2 z-50
                        w-[calc(100%-2rem)] max-w-md
                        -translate-x-1/2 -translate-y-1/2
                        rounded-xl border border-border
                        bg-card p-6 shadow-xl outline-none
                    "
                >
                    {/* X */}
                    <AlertDialog.Cancel asChild>
                        <button
                            type="button"
                            aria-label="Close"
                            className="
                                absolute right-4 top-4 rounded-md p-1.5
                                text-muted-foreground transition
                                hover:bg-secondary hover:text-foreground
                                focus-visible:outline-none
                                focus-visible:ring-2 focus-visible:ring-ring
                            "
                        >
                            <X size={18} />
                        </button>
                    </AlertDialog.Cancel>

                    <AlertDialog.Title className="pr-8 text-lg font-semibold text-foreground">
                        {title}
                    </AlertDialog.Title>

                    <AlertDialog.Description className="mt-2 text-sm text-muted-foreground">
                        {description}
                    </AlertDialog.Description>

                    <div className="mt-6 flex justify-end gap-3">
                        <AlertDialog.Cancel asChild>
                            <button
                                type="button"
                                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
                            >
                                {cancelText}
                            </button>
                        </AlertDialog.Cancel>

                        <AlertDialog.Action asChild>
                            <button
                                type="button"
                                onClick={onConfirm}
                                className="rounded-md bg-danger px-4 py-2 text-sm font-medium text-danger-foreground transition hover:opacity-90"
                            >
                                {confirmText}
                            </button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default ConfirmDialog;