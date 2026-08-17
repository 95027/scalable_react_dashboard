import * as Switch from "@radix-ui/react-switch";

interface ToggleSwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
}

const ToggleSwitch = ({
    checked,
    onCheckedChange,
    disabled = false,
}: ToggleSwitchProps) => {
    return (
        <Switch.Root
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            className="
                relative h-5 w-9 shrink-0
                cursor-pointer rounded-full
                border border-border
                bg-muted-foreground/30
                outline-none
                transition-colors
                data-[state=checked]:border-primary
                data-[state=checked]:bg-primary
                focus-visible:ring-2
                focus-visible:ring-ring
                disabled:cursor-not-allowed
                disabled:opacity-50
            "
        >
            <Switch.Thumb
                className="
                    block h-4 w-4
                    translate-x-0.5
                    rounded-full
                    bg-background
                    shadow-sm
                    ring-1 ring-border/50
                    transition-transform
                    will-change-transform
                    data-[state=checked]:translate-x-4.5
                "
            />
        </Switch.Root>
    );
};

export default ToggleSwitch;