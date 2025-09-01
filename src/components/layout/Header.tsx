import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import Heading from "../Heading";
import Text from "../Text";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
  title: string;
  subtitle?: string;
  badges?: {
    icon: React.ReactNode;
    label: string;
  }[];
}

const Header = ({
  className,
  fixed,
  title,
  subtitle,
  badges = [],
  children,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-background dark:bg-transparent flex h-auto md:h-14 items-center gap-3 px-4 py-2 md:py-10 sm:gap-4 w-full",
        fixed && "header-fixed peer/header fixed z-50 w-[inherit] rounded-md",
        offset > 10 && fixed ? "shadow-sm" : "shadow-none",
        className
      )}
      {...props}
    >
      <div className="w-full flex flex-wrap items-center justify-between gap-3">
        {/* <div className="flex md:hidden justify-between w-full gap-3">
          <Button variant={"glass"}>
            <Menu />
          </Button>

          <Button
            variant={"glass"}
            className="flex items-center justify-center"
            onClick={() => setOpenMobile(true)}
          >
            <CircleTracker isButton={true} />
          </Button>
        </div> */}

        <div>
          <Heading>{title}</Heading>
          {subtitle && <Text>{subtitle}</Text>}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {badges.map((badge, index) => (
              <Button
                key={index}
                variant={"theme"}
                className="flex items-center gap-1"
              >
                {badge.icon}
                {badge.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
