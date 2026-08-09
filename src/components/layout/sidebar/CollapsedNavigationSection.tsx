import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";

import type { NavigationSection } from "../../../constants/navigation";

interface CollapsedNavigationSectionProps {
    item: NavigationSection;
}

const CollapsedNavigationSection = ({
    item,
}: CollapsedNavigationSectionProps) => {
    const Icon = item.icon;
    const navigate = useNavigate();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    type="button"
                    title={item.label}
                    className="
                        group flex w-full items-center justify-center
                        rounded-lg p-2.5
                        text-muted-foreground
                        outline-none transition
                        hover:bg-secondary
                        hover:text-foreground
                        focus-visible:ring-2
                        focus-visible:ring-ring
                    "
                >
                    <Icon
                        size={18}
                        className="transition-transform group-hover:scale-105"
                    />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    side="right"
                    align="start"
                    sideOffset={8}
                    className="
                        z-50 min-w-56
                        rounded-lg border border-border
                        bg-card p-2 shadow-lg
                        outline-none
                    "
                >
                    <div className="px-3 py-2.5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {item.label}
                        </p>
                    </div>

                    <DropdownMenu.Separator className="my-1 h-px bg-border" />

                    <div className="space-y-1">
                        {item.children.map((child) => {
                            const ChildIcon = child.icon;

                            return (
                                <DropdownMenu.Item
                                    key={child.href}
                                    onSelect={() => navigate(child.href)}
                                    className="
                                        flex w-full cursor-pointer
                                        items-center gap-3
                                        rounded-md px-3 py-2.5
                                        text-sm text-muted-foreground
                                        outline-none transition
                                        hover:bg-secondary
                                        hover:text-foreground
                                        focus:bg-secondary
                                        focus:text-foreground
                                    "
                                >
                                    <ChildIcon
                                        size={17}
                                        className="shrink-0"
                                    />

                                    <span className="whitespace-nowrap">
                                        {child.label}
                                    </span>
                                </DropdownMenu.Item>
                            );
                        })}
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default CollapsedNavigationSection;