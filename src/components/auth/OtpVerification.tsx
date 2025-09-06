import { Button } from "@/components/ui/button";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputOtp from "../Input/InputOtp";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import { handleLogin } from "@/redux/authSlice/AuthSlice";

const OtpVerification = () => {
  const OTP_LENGTH = 4;

  const formSchema = z.object({
    otp: z
      .string()
      .length(4, { message: "OTP must be exactly 4 digits" })
      .regex(/^\d{4}$/, { message: "OTP must contain only numbers" }),
  });

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleLoginSubmit = async (values: any) => {
    try {
      console.log(values);
      // dispatch(handleLogin());
      toast.success("login successfully");
      navigate("/");
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
        <div className="grid gap-3">
          <h1 className="text-center text-lg lg:text-xl">OTP Sent</h1>
          <p className="text-center">
            Please check your SMS for OTP to verify your account.
          </p>
        </div>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <div className="flex justify-center items-center gap-3">
              <InputOtp field={field} length={OTP_LENGTH} />
            </div>
          )}
        />

        <p className="text-center">00: 30</p>

        <div className="text-center text-muted-foreground text-sm mb-3">
          Didn&apos;t receive the code?{" "}
          <Button
            variant="link"
            className="dark:text-white hover:underline underline-offset-4 px-0"
          >
            Resend OTP
          </Button>
        </div>

        <Button variant={"dark"} type="submit" className="w-full py-5">
          Verify
        </Button>
      </form>
    </Form>
  );
};

export default OtpVerification;
