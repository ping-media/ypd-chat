import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeProvider";
import { images, roles } from "@/lib/constant";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Role = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-10 px-6 md:px-20">
      <div className="flex items-center max-w-full justify-center mb-7">
        <div className="w-38 h-20 p-1 rounded-full shrink-0">
          <img
            src={theme === "light" ? images["logo-dark"] : images["logo-light"]}
            alt="YOUTH_PULSE_DIGITAL"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mb-5">
        <Heading className="text-center text-2xl lg:text-3xl">
          Choose Your Role !
        </Heading>
        <p className="text-center text-base lg:text-sm">
          Your journey starts here — choose your path.
        </p>
      </div>
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role, indx) => (
            <Card
              variant="glass"
              key={indx}
              className="group hover:dark:bg-white/40 duration-300 transition-all eas-in-out"
            >
              <CardContent>
                <div className="flex flex-row justify-center items-center lg:flex-col">
                  <Heading
                    as="h2"
                    className="text-lg lg:text-xl mb-5 text-center order-2 md:order-1"
                  >
                    {role.title}
                  </Heading>

                  <div className="w-32 h-36 lg:w-full lg:h-52 mb-3 order-1 md:order-2">
                    <img
                      className="w-full h-full object-contain"
                      src={role.image}
                      alt={role.title}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Link className="w-full" to={"/setup-profile/basic"}>
                    <Button
                      variant="outline"
                      className="w-full hover:dark:bg-green-400 hover:cursor-pointer group-hover:dark:bg-green-400 duration-300 transition-all eas-in-out"
                    >
                      Continue
                      <ArrowRight className="size-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Role;
