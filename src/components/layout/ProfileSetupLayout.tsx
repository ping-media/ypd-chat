import BasicProfileForm from "@/components/profile/BasicProfileForm";
import ProgressTracker from "@/components/tracker/ProgressTracker";
import { IStepProps } from "@/components/tracker/type/Types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "@/lib/constant";
import { ArrowLeft, ArrowRight, User2 } from "lucide-react";
import { useState } from "react";

const ProfileSetupLayout = () => {
  const [step, setStep] = useState<number>(1);

  const totalSteps: IStepProps[] = [
    { step: 1, label: "Let’s Personalize Your Experience" },
    { step: 2, label: "Set Up Your Profile Details" },
  ];

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, totalSteps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="relative z-10 w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 items-end">
        <div className="hidden md:flex justify-center">
          <img
            src={images["profile-2"]}
            alt="Student Left"
            className="max-h-[500px] object-contain"
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <Card
            variant={"glass"}
            className="overflow-hidden px-2 py-4 md:p-5 flex flex-col flex-1"
          >
            <CardContent>
              <div className="text-center mb-5">
                <h1 className="flex justify-center text-xl md:text-2xl items-center gap-2">
                  <User2 className="size-5" /> Profile Setup
                </h1>
              </div>

              {/* Progress */}
              <ProgressTracker step={step} totalSteps={totalSteps} />

              <BasicProfileForm step={step} />

              {/* Navigation buttons */}
              <div className="flex justify-between gap-2 mt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="w-1/2 px-4 py-2 rounded-md"
                  disabled={!(step > 1)}
                >
                  <ArrowLeft /> Previous
                </Button>
                {step < totalSteps.length ? (
                  <Button
                    variant="dark"
                    onClick={nextStep}
                    className="w-1/2 px-4 py-2 rounded-md"
                  >
                    Next Step <ArrowRight />
                  </Button>
                ) : (
                  <Button
                    variant="dark"
                    onClick={() => alert("Form submitted!")}
                    className="w-1/2 px-4 py-2 rounded-md"
                  >
                    Complete Step <ArrowRight />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="hidden md:flex justify-center">
          <img
            src={images["profile-1"]}
            alt="Student Right"
            className="max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupLayout;
