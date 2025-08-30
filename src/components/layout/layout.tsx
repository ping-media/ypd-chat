import { SidebarProvider as LeftSidebarProvider } from "../ui/sidebar";
import { SidebarProvider as RightSidebarProvider } from "../ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "../ui/sonner";
import { useLoadingBar } from "../../context/LoadingBarContext";
import { cn } from "../../lib/utils";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Main } from "../Main";
import AppSidebar from "../sidebars/AppSidebar";
import SEO from "../SEO";
import usePageName from "../../hooks/usePageName";
import RightSidebar from "../sidebars/RightSidebar";
import Footer from "./Footer";
import { lazy, Suspense } from "react";
import { getCookie } from "@/lib/cookies";

const SettingsModal = lazy(() => import("../modal/SettingsModal"));

const Layout = () => {
  const location = useLocation();
  const loadingBarRef = useLoadingBar();
  const { pageTitle } = usePageName(loadingBarRef);
  const defaultOpen = getCookie("sidebar_state") !== "false";

  // scroll the page to top when ever page change
  useScrollToTop();

  if (location.pathname === "/pricing") {
    return (
      <>
        <SEO title={pageTitle} />
        <div className="w-full flex overflow-hidden min-h-screen relative">
          {/* Dark mode gradient background */}
          <div className="absolute inset-0 hidden dark:block">
            <div className="absolute inset-0 [background-image:var(--main-gradient)]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-green-100 rounded-full blur-3xl opacity-40"></div>
          </div>

          <div
            id="content"
            className={cn(
              "relative z-10 flex-1 flex flex-col w-full",
              "sm:transition-[width] sm:duration-200 sm:ease-linear"
            )}
          >
            <Main fixed>
              <Outlet />
            </Main>
            <Footer />
            <Toaster />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={pageTitle} />
      <div className="w-full flex overflow-hidden max-h-dvh relative">
        {/* Dark mode gradient background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 [background-image:var(--main-gradient)]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <LeftSidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />

          <RightSidebarProvider>
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
                <Outlet />
              </Main>
              <Footer />
              <Toaster />
            </div>

            <RightSidebar />
          </RightSidebarProvider>
        </LeftSidebarProvider>

        {/* settings modal  */}
        <Suspense fallback={null}>
          <SettingsModal />
        </Suspense>

        {/* for messages  */}
        <Toaster />
      </div>
    </>
  );
};

export default Layout;
