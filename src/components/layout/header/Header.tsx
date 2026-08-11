import {
    Bell,
    Moon,
    Sun,
} from "lucide-react";
import UserDropdown from "./UserDropdown";
import { useTheme } from "../../../context/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
            {/* Page Title */}
            <div>
                <h1 className="text-lg font-semibold text-foreground">
                    Dashboard
                </h1>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <button
                    type="button"
                    className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                {/* Notifications */}
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                    <Bell size={20} />

                    {/* Notification Indicator */}
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
                </button>

                {/* User Dropdown */}
                <UserDropdown />
            </div>
        </header>
    );
};

export default Header;