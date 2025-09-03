import { useTheme } from "@/context/ThemeProvider";
import { images } from "@/lib/constant";
import { Button } from "../ui/button";
import { FileText, Video } from "lucide-react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const { theme } = useTheme();
  return (
    <header className="flex items-center justify-between px-2">
      <Link to={"/"} className="w-full">
        <div className="w-24 h-16 rounded-full shrink-0 transition-all duration-300 ease-in-out">
          <img
            src={theme === "light" ? images["logo-dark"] : images["logo-light"]}
            alt="YOUTH_PULSE_DIGITAL"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Button variant={"glass"}>
          <Video className="size-4" />
          Video Tutorial
        </Button>
        <Button variant={"glass"}>
          <FileText className="size-4" />
          Guide PDF
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;
