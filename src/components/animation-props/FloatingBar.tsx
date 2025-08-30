import { cn } from "@/lib/utils";

type FloatingBarProps = {
  className?: string;
  count?: number;
};

const FloatingBar = ({ className, count = 3 }: FloatingBarProps) => {
  return (
    <div className={cn("absolute flex flex-col gap-3", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-40 h-3 bg-white/20 rounded-full animate-float",
            `ml-${i * 5}`
          )}
        />
      ))}
    </div>
  );
};

export default FloatingBar;
