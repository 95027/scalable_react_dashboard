import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import Navigation from "./Navigation";
import CollapsedNavigation from "./CollapsedNavigation";
import { getStorageItem, setStorageItem } from "../../../utils/storage";

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(getStorageItem("sidebar_collapsed", false));

    const toggleSidebar = () => {
        setCollapsed((pre) => {
            const next = !pre;
            setStorageItem("sidebar_collapsed", next);
            return next;
        });
    }

    return (
        <aside
            className={`flex h-screen shrink-0 flex-col border-r border-border bg-card transition-[width] duration-200 ${collapsed ? "w-20" : "w-64"
                }`}
        >
            {/* Logo */}
            <div
                className={`flex h-16 shrink-0 items-center border-b border-border ${collapsed ? "justify-center px-3" : "px-5"
                    }`}
            >
                <div className="flex items-center gap-3">
                    <img
                        src="#"
                        alt="Logistics"
                        className="h-9 w-9 shrink-0 object-contain"
                    />

                    {!collapsed && (
                        <div className="min-w-0">
                            <h1 className="truncate text-base font-bold text-foreground">
                                Logistics
                            </h1>

                            <p className="truncate text-xs text-muted-foreground">
                                Admin Portal
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            {collapsed ? (
                <CollapsedNavigation />
            ) : (
                <Navigation />
            )}

            {/* Collapse Toggle */}
            <div className="shrink-0 border-t border-border p-3">
                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-label={
                        collapsed
                            ? "Expand sidebar"
                            : "Collapse sidebar"
                    }
                    className={`flex w-full items-center rounded-md py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground ${collapsed
                        ? "justify-center"
                        : "gap-3 px-3"
                        }`}
                >
                    {collapsed ? (
                        <PanelLeftOpen size={18} />
                    ) : (
                        <>
                            <PanelLeftClose size={18} />
                            <span>Collapse</span>
                        </>
                    )}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;