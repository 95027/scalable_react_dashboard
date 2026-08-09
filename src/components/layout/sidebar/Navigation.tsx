import * as Accordion from "@radix-ui/react-accordion";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ChevronDown } from "lucide-react";

import { NAVIGATION_ITEMS } from "../../../constants/navigation";
import NavigationItem from "./NavigationItem";


const Navigation = () => {
    return (
        <ScrollArea.Root className="min-h-0 flex-1 overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full">
                <nav className="px-3 py-4">
                    <Accordion.Root
                        type="single"
                        className="space-y-2"
                    >
                        {NAVIGATION_ITEMS.map((item) => {
                            if ("href" in item) {
                                return (
                                    <NavigationItem
                                        key={item.href}
                                        href={item.href}
                                        label={item.label}
                                        icon={item.icon}
                                    />
                                );
                            }

                            const SectionIcon = item.icon;

                            return (
                                <Accordion.Item
                                    key={item.label}
                                    value={item.label}
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger
                                            className="
                                                group flex w-full items-center
                                                justify-between rounded-lg px-3 py-2.5
                                                text-sm font-semibold text-foreground
                                                outline-none transition
                                                hover:bg-secondary
                                                focus-visible:ring-2
                                                focus-visible:ring-ring
                                            "
                                        >
                                            <span className="flex items-center gap-3">
                                                <span
                                                    className="
                                                        flex h-8 w-8 items-center
                                                        justify-center rounded-md
                                                        bg-secondary text-muted-foreground
                                                        transition
                                                        group-hover:text-foreground
                                                        group-data-[state=open]:bg-primary/10
                                                        group-data-[state=open]:text-primary
                                                    "
                                                >
                                                    <SectionIcon size={17} />
                                                </span>

                                                <span>{item.label}</span>
                                            </span>

                                            <ChevronDown
                                                size={16}
                                                className="
                                                    text-muted-foreground
                                                    transition-transform duration-200
                                                    group-data-[state=open]:rotate-180
                                                "
                                            />
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <Accordion.Content className="overflow-hidden">
                                        <div className="ml-4 mt-1.5 space-y-1 border-l border-border pl-4">
                                            {item.children.map((child) => (
                                                <NavigationItem
                                                    key={child.href}
                                                    href={child.href}
                                                    label={child.label}
                                                    icon={child.icon}
                                                    child
                                                />
                                            ))}
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion.Root>
                </nav>
            </ScrollArea.Viewport>

            {/* Custom Scrollbar */}
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="
                    flex w-2.5 touch-none select-none
                    border-l border-transparent p-0.5
                "
            >
                <ScrollArea.Thumb
                    className="
                        relative flex-1 rounded-full
                        bg-border
                        hover:bg-muted-foreground
                    "
                />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    );
};

export default Navigation;