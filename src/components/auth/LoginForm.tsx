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
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Spinner from "../loaders/spinner";
import useAuth from "@/hooks/use-auth";

export function LoginForm() {
  const { FormLoginSchema, onLoginSubmit } = useAuth();

  const form = useForm<z.infer<typeof FormLoginSchema>>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((values) =>
          onLoginSubmit(values, form.reset)
        )}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Email"
                  placeholder="Enter Email"
                  type="email"
                  field={field}
                  id="email"
                  Icon={Mail}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  field={field}
                  id="password"
                  Icon={Lock}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant={"dark"}
          type="submit"
          className="w-full mt-4 py-5"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && <Spinner />}
          Sign In
        </Button>

        <div className="text-center text-muted-foreground text-sm mb-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/sign-up"
            className="dark:text-white hover:underline underline-offset-4"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
