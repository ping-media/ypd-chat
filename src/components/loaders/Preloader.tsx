import React from "react";
import { cn } from "../../lib/utils";

interface SpinnerProps {
  message: string;
  textColor?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  message,
  textColor = "white",
  className,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 border-4 border-t-theme-secondary border-gray-300 rounded-full animate-spin mr-1"></div>
      <span className={cn(`mr-2 text-${textColor} uppercase`, className)}>
        {message}
      </span>
    </div>
  );
};

export const PreLoader = () => {
  return (
    <div
      id="loading-overlay"
      className="fixed inset-0 z-40 flex items-center flex-col justify-center bg-gray-900/60"
    >
      <Spinner
        message={"Loading..."}
        className="tracking-wider animate-pulse"
      />
    </div>
  );
};
