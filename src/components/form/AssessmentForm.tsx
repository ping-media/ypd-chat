import { useMemo } from "react";
import OptionsCheckboxGroup from "../Input/OptionsCheckboxGroup";
import OptionsRadioGroup from "../Input/OptionsRadioGroup";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IAssessmentFormProps {
  data: Array<{
    id: string;
    question: string;
    type: "open_ended" | "single_choice" | "multiple_choice";
    options?: Array<{ id: string; text: string; value: string }>;
    required?: boolean;
  }>;
}

const AssessmentForm = ({ data }: IAssessmentFormProps) => {
  const schema = useMemo(() => {
    const schemaFields: Record<string, z.ZodTypeAny> = {};

    data.forEach((item) => {
      const fieldName = item.id;

      switch (item.type) {
        case "open_ended":
          schemaFields[fieldName] = item.required
            ? z
                .string()
                .min(1, "This field is required")
                .min(10, "Answer must be at least 10 characters")
            : z.string().optional();
          break;

        case "single_choice":
          schemaFields[fieldName] = item.required
            ? z.string().min(1, "Please select an option")
            : z.string().optional();
          break;

        case "multiple_choice":
          schemaFields[fieldName] = item.required
            ? z.array(z.string()).min(1, "Please select at least one option")
            : z.array(z.string()).optional();
          break;
      }
    });

    return z.object(schemaFields);
  }, [data]);

  const defaultValues = useMemo(() => {
    const values: Record<string, any> = {};
    data.forEach((item) => {
      const fieldName = item.id;
      values[fieldName] = item.type === "multiple_choice" ? [] : "";
    });
    return values;
  }, [data]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const onFormSubmit = (formData: any) => {
    // Transform the data to include question details
    const transformedData = data.map((item) => ({
      questionId: item.id,
      question: item.question,
      type: item.type,
      answer: formData[item.id],
    }));

    console.log(transformedData);

    // onSubmit(transformedData);
  };

  return (
    <div className="dark:bg-white/10 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/10 p-3 rounded-md mt-3 mb-5">
      <h2 className="mb-2">Choose the correct answer to proceed!</h2>
      <Card variant={"glass"} className="!rounded-md">
        <CardContent className="px-1">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {data &&
              data.map((item: any, index: number) => {
                const fieldName = item.id;
                const error: any = errors[fieldName];

                return (
                  <div
                    key={item.id}
                    className={`mb-5 pb-5 ${
                      index !== data.length - 1
                        ? "border-b dark:border-white/30"
                        : ""
                    }`}
                  >
                    <Label className="mb-5">
                      {`Q${index + 1}. `}
                      {item.question}
                    </Label>

                    {item.type === "open_ended" ? (
                      <Controller
                        name={fieldName}
                        control={control}
                        render={({ field }) => (
                          <>
                            <Textarea
                              className="resize-none outline-none min-h-28"
                              {...field}
                            />
                            {error && (
                              <p className="text-red-500 text-sm mt-1">
                                {error.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    ) : item.type === "single_choice" ? (
                      <Controller
                        name={fieldName}
                        control={control}
                        render={({ field }) => (
                          <>
                            <OptionsRadioGroup
                              options={item.options || []}
                              value={field.value}
                              onChange={field.onChange}
                              name={field.name}
                            />
                            {error && (
                              <p className="text-red-500 text-sm mt-1">
                                {error.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    ) : (
                      <Controller
                        name={fieldName}
                        control={control}
                        render={({ field }) => (
                          <>
                            <OptionsCheckboxGroup
                              options={item.options}
                              value={field.value || []}
                              onChange={field.onChange}
                              name={field.name}
                            />
                            {error && (
                              <p className="text-red-500 text-sm mt-1">
                                {error.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    )}
                  </div>
                );
              })}

            <div className="text-center mt-5">
              <Button variant={"theme"} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Assessment"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentForm;
