import { Button } from "../ui/button";
import { AudioLines, Clock, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../ui/form";

const ChatForm = () => {
  const formSchema = z.object({
    Description: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Description: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>,
    reset: () => void
  ) => {
    console.log(values);
    reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => onSubmit(values, form.reset))}
        className="flex w-full flex-none gap-2 dark:text-white"
      >
        <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <>
              <div className="border-input focus-within:ring-ring shadow-md flex-1 gap-2 rounded-xl border px-2 py-2 focus-within:ring-1 focus-within:outline-hidden lg:gap-4 bg-[var(--color-green-30)] border-[var(--color-green-30)]/30 dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/20">
                <label className="w-full">
                  <span className="sr-only">Chat Text Box</span>
                  <textarea
                    placeholder="Start Typing..."
                    className="w-full bg-inherit focus-visible:outline-hidden resize-none max-h-40"
                    rows={2}
                    onInput={(e) => {
                      const textarea = e.currentTarget;
                      textarea.style.height = "auto";
                      textarea.style.height = textarea.scrollHeight + "px";
                    }}
                    {...field}
                    autoComplete="off"
                  />
                </label>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button className="rounded-md" variant="theme">
                      <AudioLines size={20} />
                      60/100
                    </Button>
                    <Button className="rounded-md" variant="theme">
                      <Clock size={20} />
                      00:10
                    </Button>
                  </div>
                  <Button className="rounded-md" variant="theme">
                    Proceed
                    <Send className="rotate-45" size={20} />
                  </Button>
                </div>
              </div>
            </>
          )}
        />
      </form>
    </Form>
  );
};

export default ChatForm;
