import { IStepProps } from "./type/Types";

interface IProgressTrackerProps {
  step: number;
  totalSteps: IStepProps[];
}

const ProgressTracker = ({ step, totalSteps }: IProgressTrackerProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-muted-foreground mb-2">
        <span className="font-semibold mr-1">
          Step {step} of {totalSteps.length}:
        </span>
        {totalSteps[step - 1]?.label}
      </h3>
      <div className="w-full dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 rounded-full h-2">
        <div
          className="bg-green-100 h-2 rounded-full transition-all"
          style={{ width: `${(step / totalSteps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
