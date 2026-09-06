import { X } from "lucide-react";
import type { ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import Button from "./Button";

interface DialogProps {
    title?: string;
    description?: string;
    trigger?: ReactNode;
    children: ReactNode;

    open?: boolean;
    onOpenChange?: (open: boolean) => void;

    showClose?: boolean;
    className?: string;
}

const Dialog = ({
    title,
    description,
    trigger,
    children,
    open,
    onOpenChange,
    showClose = true,
    className = "",
}: DialogProps) => {
    return (
        <RadixDialog.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            {trigger && (
                <RadixDialog.Trigger asChild>
                    {trigger}
                </RadixDialog.Trigger>
            )}

            <RadixDialog.Portal>
                <RadixDialog.Overlay
                    className="
                        fixed inset-0 z-50
                        bg-black/50
                        backdrop-blur-[1px]
                        data-[state=open]:animate-in
                        data-[state=closed]:animate-out
                        data-[state=closed]:fade-out-0
                        data-[state=open]:fade-in-0
                    "
                />

                <RadixDialog.Content
                    className={`
                        fixed left-1/2 top-1/2 z-50
                        w-[calc(100%-2rem)]
                        max-w-lg
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-lg
                        border border-border
                        bg-card
                        p-6
                        shadow-lg
                        outline-none
                        data-[state=open]:animate-in
                        data-[state=closed]:animate-out
                        data-[state=closed]:fade-out-0
                        data-[state=open]:fade-in-0
                        data-[state=closed]:zoom-out-95
                        data-[state=open]:zoom-in-95
                        ${className}
                    `}
                >
                    {(title || showClose) && (
                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                {title && (
                                    <RadixDialog.Title className="text-lg font-semibold text-foreground">
                                        {title}
                                    </RadixDialog.Title>
                                )}

                                {description && (
                                    <RadixDialog.Description className="mt-1 text-sm text-muted-foreground">
                                        {description}
                                    </RadixDialog.Description>
                                )}
                            </div>

                            {showClose && (
                                <RadixDialog.Close asChild>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        aria-label="Close dialog"
                                    >
                                        <X size={18} />
                                    </Button>
                                </RadixDialog.Close>
                            )}
                        </div>
                    )}

                    <div className="mt-4">
                        {children}
                    </div>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
};

export const DialogClose = RadixDialog.Close;

export default Dialog;