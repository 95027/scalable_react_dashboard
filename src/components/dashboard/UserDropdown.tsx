import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDown, LogOut, Settings, User } from "lucide-react"
import ConfirmDialog from "../ui/ConfirmDialog"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getErrorMessage } from "../../utils/error";

const UserDropdown = () => {

    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await dispatch(logout()).unwrap();
            navigate("/login", { replace: true });
        } catch (error) {
            toast.error(getErrorMessage(error));
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button
                        type="button"
                        className="ml-2 flex items-center gap-2 rounded-md px-2 py-1.5 outline-none transition hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        {/* Avatar */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>

                        {/* User Info */}
                        <div className="hidden text-left md:block">
                            <p className="text-sm font-medium text-foreground">
                                {user?.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {user?.role}
                            </p>
                        </div>

                        <ChevronDown
                            size={16}
                            className="text-muted-foreground"
                        />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        align="end"
                        sideOffset={8}
                        className="z-50 min-w-52 rounded-lg border border-border bg-card p-1.5 shadow-lg outline-none"
                    >
                        {/* Profile */}
                        <DropdownMenu.Item
                            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground outline-none transition focus:bg-secondary"
                        >
                            <User size={16} />
                            Profile
                        </DropdownMenu.Item>

                        {/* Settings */}
                        <DropdownMenu.Item
                            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground outline-none transition focus:bg-secondary"
                        >
                            <Settings size={16} />
                            Settings
                        </DropdownMenu.Item>

                        <DropdownMenu.Separator className="my-1 h-px bg-border" />

                        <DropdownMenu.Item
                            onSelect={() => setShowLogoutDialog(true)}
                            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-danger outline-none transition focus:bg-secondary"
                        >
                            <LogOut size={16} />
                            Logout
                        </DropdownMenu.Item>

                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* Dialog lives outside DropdownMenu */}
            <ConfirmDialog
                open={showLogoutDialog}
                onOpenChange={setShowLogoutDialog}
                title="Logout"
                description="Are you sure you want to logout from the admin portal?"
                confirmText="Logout"
                cancelText="Cancel"
                onConfirm={handleLogout}
                isLoading={isLoggingOut}
                confirmLoadingText="Logging out..."
            />
        </>
    )
}

export default UserDropdown