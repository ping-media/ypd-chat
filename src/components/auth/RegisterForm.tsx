import { Button } from "@/components/ui/button";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/Input";
import { Lock, Mail, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/use-auth";
import Spinner from "../loaders/spinner";

export function RegisterForm() {
  const { FormRegisterSchema: formSchema, onRegisterSubmit } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((values) =>
          onRegisterSubmit(values, form.reset)
        )}
      >
        <div className="grid md:flex md:flex-row items-center gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <div className="grid gap-3">
                <Input
                  label="First Name"
                  placeholder="Enter First Name"
                  field={field}
                  id="first_name"
                  Icon={User2}
                />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <div className="grid gap-3">
                <Input
                  label="Last Name"
                  placeholder="Enter Last Name"
                  field={field}
                  id="last_name"
                  Icon={User2}
                />
              </div>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="grid gap-3">
              <Input
                label="Email"
                placeholder="Enter Email"
                type="email"
                field={field}
                id="email"
                Icon={Mail}
              />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div className="grid gap-3">
              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
                field={field}
                id="password"
                Icon={Lock}
              />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <div className="grid gap-3">
              <Input
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                type="password"
                field={field}
                id="confirm_password"
                Icon={Lock}
              />
            </div>
          )}
        />

        <Button
          variant={"dark"}
          type="submit"
          className="w-full mt-4 py-5"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && <Spinner />}
          Sign Up
        </Button>

        <div className="text-center text-muted-foreground text-sm mb-4">
          Already have an account?{" "}
          <Link
            to="/auth/sign-in"
            className="dark:text-white hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
}
