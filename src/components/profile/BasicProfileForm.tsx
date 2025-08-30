import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input/Input";
import Select from "../Input/Select";

interface IBasicProfileFormProps {
  step: number;
}

const BasicProfileForm = ({ step }: IBasicProfileFormProps) => {
  const formSchema = z.object({
    fullName: z.string(),
    age: z.string(),
    language: z.string(),
    class: z.string(),
    stream: z.string(),
    primaryInterest: z.string(),
    workSector: z.string(),
    workLocation: z.string(),
    careerGoals: z.string(),
    experienceLevel: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: "",
      language: "",
      class: "",
      stream: "",
      primaryInterest: "",
      workSector: "",
      workLocation: "",
      careerGoals: "",
      experienceLevel: "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Input
                    label="Full Name"
                    placeholder="Enter Full Name"
                    field={field}
                    id="fullName"
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Input
                    label="Age"
                    placeholder="Enter Age"
                    type="number"
                    field={field}
                    id="age"
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Preferred Language"
                    placeholder="Select Language"
                    field={field}
                    id="language"
                    options={["english", "hindi"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Class / Level"
                    placeholder="Select Class"
                    field={field}
                    id="class"
                    options={["10th", "12th"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Academic Stream"
                    placeholder="Select academic stream"
                    field={field}
                    id="stream"
                    options={["10th", "12th"]}
                  />
                </div>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="primaryInterest"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Primary Interest"
                    placeholder="Select primary interest"
                    field={field}
                    id="primaryInterest"
                    options={["english", "hindi"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="workSector"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Work Sector"
                    placeholder="Select work sector"
                    field={field}
                    id="workSector"
                    options={["english", "hindi"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="workLocation"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Work Location"
                    placeholder="Select work location"
                    field={field}
                    id="workLocation"
                    options={["english", "hindi"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="careerGoals"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Career Goals"
                    placeholder="Select career goals"
                    field={field}
                    id="careerGoals"
                    options={["10th", "12th"]}
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <div className="grid gap-3">
                  <Select
                    label="Experience Level"
                    placeholder="Select experience level"
                    field={field}
                    id="experienceLevel"
                    options={["10th", "12th"]}
                  />
                </div>
              )}
            />
          </>
        )}
      </form>
    </Form>
  );
};

export default BasicProfileForm;
