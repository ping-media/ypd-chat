import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type OptionsRadioGroupProps = {
  options?: any;
};

const OptionsRadioGroup = ({ options = [] }: OptionsRadioGroupProps) => {
  return (
    <RadioGroup className="flex space-x-4">
      {options.map((opt: any) => (
        <div key={opt.id} className="flex items-center space-x-2">
          <RadioGroupItem value={opt.id} id={opt.id} />
          <Label htmlFor={opt.id}>{opt.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default OptionsRadioGroup;
