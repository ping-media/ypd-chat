import { cn } from "@/lib/utils";

interface IDOTProps {
  className?: string;
}

const Dot = ({ className }: IDOTProps) => {
  return (
    <div
      className={cn(
        "w-9 h-9 flex items-center justify-center rounded-full glass-without-shadow",
        className
      )}
    >
      <div className="w-6 h-6 rounded-full border-6 border-white"></div>
    </div>
  );
};

export default Dot;
