import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type OptionsCheckboxGroupProps = {
  options?: { id: string; label: string }[];
  twoPerLine?: boolean;
  value?: string[];
  onChange?: (selected: string[]) => void;
};

const OptionsCheckboxGroup = ({
  options = [],
  twoPerLine = true,
  value = [],
  onChange,
}: OptionsCheckboxGroupProps) => {
  const handleToggle = (id: string) => {
    if (value.includes(id)) {
      onChange?.(value.filter((v) => v !== id));
    } else {
      onChange?.([...value, id]);
    }
  };

  return (
    <div
      className={twoPerLine ? "grid grid-cols-2 gap-4" : "flex flex-wrap gap-4"}
    >
      {options.map((opt) => (
        <div key={opt.id} className="flex items-center space-x-2">
          <Checkbox
            id={opt.id}
            checked={value.includes(opt.id)}
            onCheckedChange={() => handleToggle(opt.id)}
          />
          <Label htmlFor={opt.id}>{opt.label}</Label>
        </div>
      ))}
    </div>
  );
};

export default OptionsCheckboxGroup;
