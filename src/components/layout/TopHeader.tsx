import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import CircleTracker from "../sidebars/RightSidebar/CircleTracker";
import { usePersistSidebar } from "@/hooks/usePersistentSidebar";

const TopHeader = () => {
  const { toggleLeft, toggleRight } = usePersistSidebar();

  return (
    <div className="w-full flex md:hidden justify-between w-full gap-3">
      <Button variant={"glass"} onClick={toggleLeft}>
        <Menu />
      </Button>

      <Button
        variant={"glass"}
        className="flex items-center justify-center"
        onClick={toggleRight}
      >
        <CircleTracker isButton={true} />
      </Button>
    </div>
  );
};

export default TopHeader;
