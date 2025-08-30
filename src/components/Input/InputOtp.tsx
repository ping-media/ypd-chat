import { cn } from "@/lib/utils";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

interface IInputOtpProps {
  length: number;
  field: any;
}

const InputOtp = ({ length, field }: IInputOtpProps) => {
  return (
    <InputOTP
      maxLength={length}
      value={field.value}
      onChange={field.onChange}
      className="flex justify-center gap-3"
    >
      {new Array(length).fill("").map((_, index) => (
        <InputOTPSlot
          key={index}
          className={cn(
            "w-14 h-14 text-xl rounded-md border border-muted-foreground/30",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent",
            "data-[state=focused]:ring-0 data-[state=focused]:outline-none"
          )}
          index={index}
        />
      ))}
    </InputOTP>
  );
};

export default InputOtp;
