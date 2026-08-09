import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarNavItemProps {
    href: string;
    label: string;
    icon: LucideIcon;
    child?: boolean;
}

const NavigationItem = ({
    href,
    label,
    icon: Icon,
    child = false,
}: SidebarNavItemProps) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                `group flex items-center gap-3 rounded-md transition ${child
                    ? "px-3 py-2 text-[13px]"
                    : "rounded-lg px-3 py-2.5 text-sm"
                } ${isActive
                    ? "bg-primary font-medium text-primary-foreground shadow-sm"
                    : "font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`
            }
        >
            <Icon
                size={child ? 16 : 18}
                className="shrink-0 transition-transform group-hover:scale-105"
            />

            <span>{label}</span>
        </NavLink>
    );
};

export default NavigationItem;