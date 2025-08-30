import BackButton from "@/components/Button/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeProvider";
import { images } from "@/lib/constant";
import { Outlet } from "react-router-dom";
import Bubble from "../bubble/Bubble";

const OnBoardingLayout = () => {
  const { theme } = useTheme();
  return (
    <div className="relative z-10 w-full flex flex-col px-10 pt-6 flex-1">
      {/* back button  */}
      <BackButton className="absolute z-20 left-10 hidden lg:block" />

      <div className="flex flex-col gap-6 flex-1">
        <div className="overflow-hidden p-0 flex flex-col flex-1">
          <div className="grid p-0 md:grid-cols-2 flex-1">
            <div className="relative hidden md:block">
              <Bubble message="Let’s reimagine your future! I’ll help you rediscover your strengths and confidently pivot toward a career that feels right — and rewarding." />

              <img
                src={images.teacher}
                alt="Image"
                className="absolute h-5/6 bottom-0 w-3/4 object-contain"
              />
            </div>

            <Card
              variant="glass"
              className="md:p-8 flex flex-col items-center justify-center h-full"
            >
              <CardContent className="w-full h-full">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col items-center text-center mb-10 lg:mb-0">
                    <p className="text-muted-foreground text-sm text-balance">
                      Powered By
                    </p>
                    <div className="w-48 h-24 lg:w-40 lg:h-20 p-1 rounded-full shrink-0">
                      <img
                        src={
                          theme === "light"
                            ? images["logo-dark"]
                            : images["logo-light"]
                        }
                        alt="YOUTH_PULSE_DIGITAL"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* steps render dynamically here */}
                  <div className="flex-1 w-full h-0">
                    <Outlet />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingLayout;
