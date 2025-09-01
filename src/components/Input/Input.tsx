import { Label } from "../ui/label";
import { Input as ShadcnInput } from "../ui/input";
import { cn } from "@/lib/utils";

interface IInputProps {
  field: any;
  label?: string;
  placeholder: string;
  required?: boolean;
  Icon?: any;
  type?: "text" | "email" | "password" | "number";
  id: string;
  isLabel?: boolean;
}

const Input = ({
  field,
  label,
  placeholder,
  // required = true,
  type = "text",
  isLabel = true,
  Icon,
  id,
}: IInputProps) => {
  return (
    <>
      {isLabel && label && (
        <div className="flex items-center">
          <Label htmlFor={id}>{label}</Label>
        </div>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Icon className="size-5" />
          </span>
        )}
        <ShadcnInput
          id={id}
          type={type}
          placeholder={placeholder}
          // required={required}
          {...field}
          className={cn(
            Icon ? "pl-10" : "",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent no-spinner py-5"
          )}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default Input;
