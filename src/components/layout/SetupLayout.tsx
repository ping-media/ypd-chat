import { cn } from "@/lib/utils";
import { Main } from "../Main";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const SetupLayout = () => {
  const location = useLocation();
  const isRolePage = location.pathname.includes("/choose-role");

  return (
    <div className="w-full flex max-h-dvh relative">
      {/* Dark mode gradient background */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 [background-image:var(--main-gradient)]"></div>
        {/* dot pattern */}
        {isRolePage && (
          <>
            <div className="absolute hidden lg:block top-5 left-0 w-1/6 h-1/6 dot-pattern text-green-200 opacity-40"></div>
            <div className="absolute hidden lg:block bottom-5 right-0 w-1/6 h-1/6 dot-pattern text-green-200 opacity-40"></div>
          </>
        )}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div
        id="content"
        className={cn(
          "ml-auto w-full max-w-full border z-10",
          "sm:transition-[width] sm:duration-200 sm:ease-linear",
          "flex h-svh flex-col",
          "group-data-[scroll-locked=1]/body:h-full",
          "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
        )}
      >
        <Main fixed={!isRolePage} className="flex-1">
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default SetupLayout;
