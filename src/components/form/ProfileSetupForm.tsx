import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import Input from "../Input/Input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProfileSetupSchema } from "@/hooks/schemas/profile";
import Spinner from "../loaders/spinner";
import TextArea from "../Input/TextArea";
import useProfile from "@/hooks/use-profile";

const ProfileSetupForm = () => {
  const { onProfileSubmit } = useProfile();

  const form = useForm<z.infer<typeof ProfileSetupSchema>>({
    resolver: zodResolver(ProfileSetupSchema),
    defaultValues: {
      full_name: "",
      email_id: "",
      grade: "",
      school_name: "",
      phone: "",
      city: "",
      city_tier: "",
      subject_stream: "",
      aspiration_vision: "",
      describe_future_self: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={form.handleSubmit((values) =>
          onProfileSubmit(values, form.reset)
        )}
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Full Name"
                  placeholder="Enter Full Name"
                  field={field}
                  id="full_name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email_id"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Email"
                  placeholder="Enter Email"
                  type="email"
                  field={field}
                  id="email_id"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Grade"
                  placeholder="Enter Grade"
                  field={field}
                  id="grade"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="school_name"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="School Name"
                  placeholder="Enter School Name"
                  field={field}
                  id="school_name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  type="number"
                  field={field}
                  id="phone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="City"
                  placeholder="Enter City"
                  field={field}
                  id="city"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city_tier"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="City Tier"
                  placeholder="Enter City Tier"
                  field={field}
                  id="city_tier"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject_stream"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <Input
                  label="Subject Stream"
                  placeholder="Enter Subject Stream"
                  field={field}
                  id="subject_stream"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aspiration_vision"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <TextArea
                  label="Aspiration Vision"
                  placeholder="Enter Aspiration Vision"
                  field={field}
                  id="aspiration_vision"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="describe_future_self"
          render={({ field }) => (
            <FormItem className="grid gap-3">
              <FormControl>
                <TextArea
                  label="Describe Future Self"
                  placeholder="Enter Describe Future Self"
                  field={field}
                  id="describe_future_self"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="button"
          className="w-full mt-4 py-5"
          disabled={form.formState.isSubmitting}
        >
          Cancel
        </Button>
        <Button
          variant={"dark"}
          type="submit"
          className="w-full mt-4 py-5"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && <Spinner />}
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default ProfileSetupForm;
