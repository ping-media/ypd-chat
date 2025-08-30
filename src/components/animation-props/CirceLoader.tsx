import { cn } from "@/lib/utils";

type CircleLoaderProps = {
  count?: number;
  className?: string;
};

const CircleLoader = ({ count = 3, className }: CircleLoaderProps) => {
  const circles = Array.from({ length: count });

  return (
    <div
      className={cn(
        "absolute flex items-center justify-center gap-2 rotate-125",
        className
      )}
    >
      {circles.map((_, i) => {
        const size = 20 + i * 10;

        return (
          <div
            key={i}
            className="bg-white/20 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: 1 - i * 0.2,
            }}
          />
        );
      })}
    </div>
  );
};

export default CircleLoader;
