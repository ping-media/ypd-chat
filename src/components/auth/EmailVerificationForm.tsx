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
import Spinner from "../loaders/spinner";
import useAuth from "@/hooks/use-auth";

export function EmailVerificationForm() {
  const { EmailVerificationSchema, onEmailVerificationSubmit } = useAuth();

  const form = useForm<z.infer<typeof EmailVerificationSchema>>({
    resolver: zodResolver(EmailVerificationSchema),
    defaultValues: {
      token: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((values) =>
          onEmailVerificationSubmit(values, form.reset)
        )}
      >
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Token"
                  placeholder="Enter Token"
                  field={field}
                  id="token"
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
          Verify Email
        </Button>
      </form>
    </Form>
  );
}
