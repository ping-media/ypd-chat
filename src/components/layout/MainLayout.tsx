import { cn } from "@/lib/utils";
import { AppSidebar } from "../sidebars/AppSidebar";
import { SidebarProvider as LeftSidebarProvider } from "../ui/sidebar";
import { SidebarProvider as RightSidebarProvider } from "../ui/sidebar";
import { Main } from "../Main";
// import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "../ui/sonner";
import { RightSidebar } from "../sidebars/RightSidebar";
import { usePersistSidebar } from "@/hooks/usePersistentSidebar";

const MainLayout = () => {
  const { isLeftOpen, setLeftOpen, isRightOpen, setRightOpen } =
    usePersistSidebar();

  return (
    <LeftSidebarProvider open={isLeftOpen} onOpenChange={setLeftOpen}>
      <AppSidebar />

      <RightSidebarProvider open={isRightOpen} onOpenChange={setRightOpen}>
        <div
          id="content"
          className={cn(
            "w-full max-w-full border z-10",
            "sm:ml-auto",
            "sm:peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "sm:peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon-with-space))]",
            "sm:transition-[width] sm:duration-200 sm:ease-linear",
            "flex h-svh flex-col",
            "group-data-[scroll-locked=1]/body:h-full",
            "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
          )}
        >
          <Main fixed>
            {/* <TopHeader /> */}
            <Outlet />
          </Main>
          <Footer />
          <Toaster />
        </div>

        <RightSidebar />
      </RightSidebarProvider>
    </LeftSidebarProvider>
  );
};

export default MainLayout;
