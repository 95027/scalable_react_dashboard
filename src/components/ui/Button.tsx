import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) => {
    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        danger:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost:
            "text-muted-foreground hover:bg-muted hover:text-foreground",
    };

    const sizes = {
        sm: "px-2.5 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
    };

    return (
        <button
            className={`
                inline-flex items-center justify-center
                rounded-md
                font-medium
                transition-colors
                disabled:pointer-events-none
                disabled:opacity-50
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;