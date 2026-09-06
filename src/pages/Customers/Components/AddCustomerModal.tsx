import Dialog, { DialogClose } from "../../../components/ui/Dialog";
import Button from "../../../components/ui/Button";
import { useState } from "react";

const AddCustomerModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTimeout(() => {
            setIsOpen(false);
        }, 3000);

    }

    return (
        <Dialog
            title="Add Customer"
            description="Create a new logistics customer."
            open={isOpen}
            onOpenChange={setIsOpen}
            trigger={
                <Button type="button">
                    Add Customer
                </Button>
            }
        >
            <form className="space-y-4" onSubmit={submitHandler}>
                <div className="space-y-1">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter customer name"
                        className="
                            w-full
                            rounded-md
                            border border-border
                            bg-background
                            px-3 py-2
                            text-sm
                            text-foreground
                            outline-none
                            focus:border-primary
                        "
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter customer email"
                        className="
                            w-full
                            rounded-md
                            border border-border
                            bg-background
                            px-3 py-2
                            text-sm
                            text-foreground
                            outline-none
                            focus:border-primary
                        "
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                    >
                        Phone
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        className="
                            w-full
                            rounded-md
                            border border-border
                            bg-background
                            px-3 py-2
                            text-sm
                            text-foreground
                            outline-none
                            focus:border-primary
                        "
                    />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                    </DialogClose>

                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </Dialog>
    );
};

export default AddCustomerModal;