import { Label } from "../ui/label";
import { Textarea as ShadcnTextArea } from "../ui/textarea";
import { cn } from "@/lib/utils";

interface IInputProps {
  field: any;
  label?: string;
  placeholder: string;
  required?: boolean;
  id: string;
  isLabel?: boolean;
}

const TextArea = ({
  field,
  label,
  placeholder,
  isLabel = true,
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
        <ShadcnTextArea
          id={id}
          placeholder={placeholder}
          {...field}
          className={cn(
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent no-spinner resize-none py-5"
          )}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default TextArea;
