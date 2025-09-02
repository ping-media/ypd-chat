import { useNavigation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import React, { useEffect } from "react";
import CircleTracker from "./RightSidebar/CircleTracker";
import { SidebarMenuCollapsible } from "./RightSidebar/SidebarMenuCollapsedDropdown";
import { rightSidebarList } from "@/lib/menuList";
import { ScrollArea } from "../ui/scroll-area";

type AppSidebarProps = {
  side?: "left" | "right";
} & React.ComponentProps<typeof Sidebar>;

export const RightSidebar = ({ side = "right", ...props }: AppSidebarProps) => {
  const { setOpenMobile, openMobile } = useSidebar();
  const navigation = useNavigation();

  useEffect(() => {
    if (
      navigation.state === "loading" &&
      openMobile &&
      window.innerWidth < 768
    ) {
      setOpenMobile(false);
    }
  }, [navigation.state]);

  return (
    <>
      <Sidebar side={side} collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="w-full flex gap-2 group-data-[collapsible=icon]:justify-center items-center">
            <SidebarTrigger className="scale-125 lg:scale-105 hover:cursor-pointer" />

            <h2 className="text-base font-semibold group-data-[collapsible=icon]:hidden transition-all duration-300 ease-in-out">
              Journey Tracker
            </h2>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent className="my-1">
              <CircleTracker className="justify-center" />

              <ScrollArea className="flex-1 h-[calc(100vh-200px)]">
                <SidebarMenu className="px-0">
                  {rightSidebarList.map((menu) => {
                    const key = menu.title;
                    return (
                      <SidebarMenuCollapsible
                        key={key}
                        item={menu}
                        href={location.href}
                      />
                    );
                  })}
                </SidebarMenu>
              </ScrollArea>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export const useRightSidebar = () => {
  const { toggleSidebar } = useSidebar();
  return { toggleRightSidebar: toggleSidebar };
};
