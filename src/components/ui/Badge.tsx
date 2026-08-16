import type { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "success" | "danger" | "warning" | "default";
}

const BADGE_STYLES: Record<
    NonNullable<BadgeProps["variant"]>,
    string
> = {
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
    warning: "bg-warning/10 text-warning",
    default: "bg-secondary text-secondary-foreground",
};

const Badge = ({
    children,
    variant = "default",
}: BadgeProps) => {
    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${BADGE_STYLES[variant]}`}
        >
            {children}
        </span>
    );
};

export default Badge;