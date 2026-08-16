import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import type { CustomerStatus } from "../CustomersPage";

interface StatusFilterProps {
    value: string;
    onChange: (value: CustomerStatus) => void;
}

const StatusFilter = ({
    value,
    onChange,
}: StatusFilterProps) => {
    return (
        <Select.Root
            value={value}
            onValueChange={onChange}
        >
            <Select.Trigger
                className="
                    inline-flex h-10 min-w-32
                    items-center justify-between
                    gap-2 rounded-md
                    border border-input
                    bg-background px-3
                    text-sm text-foreground
                    outline-none
                    hover:bg-secondary
                    focus:ring-2 focus:ring-ring/20
                "
            >
                <Select.Value placeholder="Status" />
                <Select.Icon>
                    <ChevronDown
                        size={15}
                        className="text-muted-foreground"
                    />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    position="popper"
                    sideOffset={5}
                    className="
                        z-50 min-w-32 overflow-hidden
                        rounded-md border border-border
                        bg-card p-1 shadow-lg
                    "
                >
                    <Select.Viewport>
                        <Select.Item
                            value="all"
                            className="
                                relative flex cursor-pointer
                                select-none items-center
                                rounded-md py-2 pl-8 pr-3
                                text-sm text-foreground
                                outline-none
                                data-highlighted:bg-secondary
                            "
                        >
                            <Select.ItemIndicator className="absolute left-2">
                                <Check size={15} />
                            </Select.ItemIndicator>

                            <Select.ItemText>
                                All Status
                            </Select.ItemText>
                        </Select.Item>

                        <Select.Item
                            value="active"
                            className="
                                relative flex cursor-pointer
                                select-none items-center
                                rounded-md py-2 pl-8 pr-3
                                text-sm text-foreground
                                outline-none
                                data-highlighted:bg-secondary
                            "
                        >
                            <Select.ItemIndicator className="absolute left-2">
                                <Check size={15} />
                            </Select.ItemIndicator>

                            <Select.ItemText>
                                Active
                            </Select.ItemText>
                        </Select.Item>

                        <Select.Item
                            value="inactive"
                            className="
                                relative flex cursor-pointer
                                select-none items-center
                                rounded-md py-2 pl-8 pr-3
                                text-sm text-foreground
                                outline-none
                                data-highlighted:bg-secondary
                            "
                        >
                            <Select.ItemIndicator className="absolute left-2">
                                <Check size={15} />
                            </Select.ItemIndicator>

                            <Select.ItemText>
                                Inactive
                            </Select.ItemText>
                        </Select.Item>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

export default StatusFilter;