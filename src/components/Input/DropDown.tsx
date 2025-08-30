import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { cn } from "@/lib/utils";

type DropDownProps = {
  value: string;
  options: string[];
  variant?: "default" | "ghost";
  setValue?: (value: any) => void;
};

const DropDown = ({
  value,
  options,
  variant = "default",
  setValue,
}: DropDownProps) => {
  const [selected, setSelected] = useState(value);

  const handleUpdateState = (value: string) => {
    setSelected(value);
    setValue && setValue(value);
  };

  return (
    <Select defaultValue={value} onValueChange={handleUpdateState}>
      <SelectTrigger
        className={cn(
          "w-fit min-w-[100px] flex items-center gap-1",
          variant === "default" &&
            "border bg-white/10 dark:bg-white/5 rounded-md px-3 py-2",
          variant === "ghost" &&
            "border-0 bg-transparent shadow-none px-0 py-0 justify-end" +
              "focus:ring-0 focus:outline-none data-[state=open]:bg-transparent"
        )}
      >
        <span className="capitalize">{selected}</span>
      </SelectTrigger>
      <SelectContent>
        {options.map((option, indx) => (
          <SelectItem value={option} key={indx} className="capitalize">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
