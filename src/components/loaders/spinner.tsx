import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ISpinnerProps {
  className?: string;
}

const Spinner = ({ className }: ISpinnerProps) => {
  return <Loader2 className={cn("w-4 h-4 animate-spin mr-2", className)} />;
};

export default Spinner;
