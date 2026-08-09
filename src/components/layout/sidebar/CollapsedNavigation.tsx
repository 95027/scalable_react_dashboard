import * as ScrollArea from "@radix-ui/react-scroll-area";
import { NavLink } from "react-router-dom";

import { NAVIGATION_ITEMS } from "../../../constants/navigation";
import CollapsedNavigationSection from "./CollapsedNavigationSection";

const CollapsedNavigation = () => {
    return (
        <ScrollArea.Root className="min-h-0 flex-1 overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full">
                <nav className="space-y-2 px-3 py-4">
                    {NAVIGATION_ITEMS.map((item) => {

                        if ("href" in item) {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    title={item.label}
                                    className={({ isActive }) =>
                                        `flex items-center justify-center rounded-lg p-2.5 transition ${isActive
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                </NavLink>
                            );
                        }

                        return (
                            <CollapsedNavigationSection
                                key={item.label}
                                item={item}
                            />
                        );
                    })}
                </nav>
            </ScrollArea.Viewport>

            {/* Scrollbar */}
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="flex w-2.5 touch-none select-none border-l border-transparent p-0.5"
            >
                <ScrollArea.Thumb
                    className="relative flex-1 rounded-full bg-border hover:bg-muted-foreground"
                />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    );
};

export default CollapsedNavigation;