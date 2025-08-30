import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/Input";
import { PhoneCall } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginWithNumberForm() {
  const formSchema = z.object({
    contact: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .max(10, { message: "Phone number must be at most 10 digits" })
      .regex(/^[6-9]\d{9}$/, { message: "Invalid phone number" }),
  });

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: "",
    },
  });

  const handleLoginSubmit = async (values: any) => {
    try {
      console.log(values);
      navigate("/auth/phone-number/verification");
    } catch (err) {
      toast.error("unable to login! try again");
      console.error(err);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleLoginSubmit)}
      >
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  type="number"
                  field={field}
                  id="contact"
                  Icon={PhoneCall}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={"dark"} type="submit" className="w-full mt-6">
          Sign In
        </Button>

        <div className="text-center text-muted-foreground text-sm mb-4">
          Don&apos;t have an account?{" "}
          <Link
            to="#"
            className="dark:text-white hover:underline underline-offset-4"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
