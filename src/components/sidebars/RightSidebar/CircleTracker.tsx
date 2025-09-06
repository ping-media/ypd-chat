import { cn } from "@/lib/utils";

type CircleTrackerProps = {
  percentage?: string;
  currentStep?: string;
  className?: string;
  isButton?: boolean;
};

const CircleTracker = ({
  percentage = "10",
  currentStep = "1",
  isButton = false,
  className,
}: CircleTrackerProps) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const parsedPercentage = parseFloat(percentage);
  const dashOffset = circumference * (1 - parsedPercentage / 100);

  return (
    <div
      className={cn(
        "flex items-center group-data-[collapsible=icon]:justify-center rounded-xl gap-3",
        isButton ? "" : "mb-5",
        className
      )}
    >
      {isButton ? (
        <div className="relative w-full h-full">
          <svg
            className="!w-8 !h-8 transform -rotate-90 transition-all duration-300 ease-out"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e2e8f0"
              strokeWidth="10"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="stroke-green-700 transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-700">
            {parsedPercentage}%
          </div>
        </div>
      ) : (
        <div className="relative">
          <svg
            className="w-16 h-16 group-data-[collapsible=icon]:w-14 group-data-[collapsible=icon]:h-14 transform -rotate-90 transition-all duration-300 ease-out"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e2e8f0"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="stroke-green-700 transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-green-700">
            {parsedPercentage}%
          </div>
        </div>
      )}
      <div className="w-0 hidden lg:flex flex-1 text-sm text-gray-950 dark:text-white group-data-[collapsible=icon]:hidden transition-all duration-300 ease-in-out">
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-green-600">
          Completed Step: <span className="font-medium">{currentStep}</span> /
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default CircleTracker;
