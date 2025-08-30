import { Switch as ShadSwitch } from "@/components/ui/switch";

type SwitchProps = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
};

const Switch = ({ enabled, setEnabled }: SwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <ShadSwitch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
};

export default Switch;
