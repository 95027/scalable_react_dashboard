import Dialog, { DialogClose } from "../../../components/ui/Dialog";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import customerService from "../../../services/customer.service";
import { queryClient } from "../../../app/queryClient";
import { toast } from "sonner";
import { getErrorMessage } from "../../../utils/error";


const addCustomerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
});

type AddCustomerForm = z.infer<typeof addCustomerSchema>

const AddCustomerModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddCustomerForm>({ resolver: zodResolver(addCustomerSchema) });

    const createCustomerMutation = useMutation({
        mutationFn: customerService.createCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"]
            });
            reset();
            setIsOpen(false);
            toast.success("Customer created successfully.");
        },
        onError: (error) => {
            toast.error(getErrorMessage(error));
        }
    })

    const submitHandler: SubmitHandler<AddCustomerForm> = (data) => {
        createCustomerMutation.mutate(data);
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
            <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
                <div className="space-y-1">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                    >
                        Name
                    </label>

                    <input
                        id="name"
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
                        {...register("name")}
                    />
                    {
                        errors.name && (
                            <p className="mt-1 text-xs text-danger">
                                {errors.name.message}
                            </p>
                        )
                    }
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
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs text-danger">
                            {errors.email.message}
                        </p>
                    )}
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
                        {...register("phone")}
                    />
                    {errors.phone && (
                        <p className="mt-1 text-xs text-danger">
                            {errors.phone.message}
                        </p>
                    )}
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

                    <Button type="submit" disabled={createCustomerMutation.isPending}>
                        Submit
                    </Button>
                </div>
            </form>
        </Dialog>
    );
};

export default AddCustomerModal;