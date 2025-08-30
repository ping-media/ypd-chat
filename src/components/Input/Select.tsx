import { Label } from "../ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface IOptionType {
  label: string;
  value: string;
}

interface ISelectProps {
  field: any;
  label?: string;
  placeholder: string;
  required?: boolean;
  Icon?: any;
  id: string;
  isLabel?: boolean;
  options: IOptionType[] | string[];
}

const Select = ({
  field,
  label,
  placeholder,
  required = true,
  isLabel = true,
  Icon,
  id,
  options,
}: ISelectProps) => {
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
        <ShadcnSelect onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger
            className={cn(
              Icon ? "pl-10" : "",
              "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent no-spinner w-full py-5"
            )}
            id={id}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 dark:hover:bg-white/30">
            {options.map((option: any, indx: number) => {
              if (typeof option === "string") {
                return (
                  <SelectItem
                    key={indx}
                    value={option}
                    className="dark:hover:bg-white/30"
                  >
                    {option}
                  </SelectItem>
                );
              }
              return (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </ShadcnSelect>
      </div>
    </>
  );
};

export default Select;
