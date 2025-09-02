import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import CircleTracker from "../sidebars/RightSidebar/CircleTracker";
import { useLeftSidebar } from "../sidebars/AppSidebar";
import { useRightSidebar } from "../sidebars/RightSidebar";

const TopHeader = () => {
  const { toggleLeftSidebar } = useLeftSidebar();
  const { toggleRightSidebar } = useRightSidebar();

  return (
    <div className="w-full flex md:hidden justify-between w-full gap-3">
      <Button variant={"glass"} onClick={toggleLeftSidebar}>
        <Menu />
      </Button>

      <Button
        variant={"glass"}
        className="flex items-center justify-center"
        onClick={toggleRightSidebar}
      >
        <CircleTracker isButton={true} />
      </Button>
    </div>
  );
};

export default TopHeader;
