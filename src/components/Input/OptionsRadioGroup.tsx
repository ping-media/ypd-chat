import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type OptionsRadioGroupProps = {
  options?: { id: string; label: string }[];
  twoPerLine?: boolean;
};

const OptionsRadioGroup = ({
  options = [],
  twoPerLine = true,
}: OptionsRadioGroupProps) => {
  return (
    <RadioGroup
      className={twoPerLine ? "grid grid-cols-2 gap-4" : "flex space-x-4"}
    >
      {options.map((opt) => (
        <div key={opt.id} className="flex items-center space-x-2">
          <RadioGroupItem value={opt.id} id={opt.id} />
          <Label htmlFor={opt.id}>{opt.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default OptionsRadioGroup;
