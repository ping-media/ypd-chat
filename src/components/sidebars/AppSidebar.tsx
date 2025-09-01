import { Link, useLocation, useNavigation } from "react-router-dom";
import { getMenuList } from "../../lib/menuList";
import { images } from "../../lib/constant";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";

import React, { useEffect } from "react";
import { NavUser } from "../layout/NavUser";
import { useTheme } from "@/context/ThemeProvider";

type AppSidebarProps = {
  side?: "left" | "right";
} & React.ComponentProps<typeof Sidebar>;

const AppSidebar = ({ side = "left", ...props }: AppSidebarProps) => {
  const { setOpenMobile, openMobile } = useSidebar();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const location = useLocation();
  const menuList = getMenuList(location.pathname);

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
    <Sidebar side={side} collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full flex gap-2 justify-between items-center">
          <div className="w-32 h-16 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 p-1 rounded-full shrink-0 transition-all duration-300 ease-in-out">
            <img
              src={
                theme === "light" ? images["logo-dark"] : images["logo-light"]
              }
              alt="YOUTH_PULSE_DIGITAL"
              className="w-full h-full object-contain group-data-[collapsible=icon]:hidden"
            />

            <img
              src={images.logo}
              alt="YOUTH_PULSE_DIGITAL_COLLAPSED"
              className="hidden w-full h-full object-contain group-data-[collapsible=icon]:block"
            />
          </div>
          <SidebarTrigger className="scale-125 lg:scale-105 cursor-pointer" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="my-1">
            <SidebarMenu>
              {menuList.map((group, groupIndex) => {
                const menus = group.menus;

                if (menus?.length === 0) {
                  return null;
                }

                return (
                  <React.Fragment key={groupIndex}>
                    {group.groupLabel && (
                      <SidebarGroupLabel className="text-xs text-muted-foreground px-3 py-2">
                        {group.groupLabel}
                      </SidebarGroupLabel>
                    )}
                    {menus.map((menu) => {
                      const Icon = menu.icon;
                      return (
                        <SidebarMenuItem
                          key={menu.label}
                          className="flex items-center justify-center"
                        >
                          <SidebarMenuButton
                            asChild
                            isActive={menu?.active}
                            className="text-left outline-none"
                          >
                            <Link
                              to={menu.href}
                              target={menu?.target ? menu.target : "_self"}
                              className="w-full flex items-center gap-3 p-2 rounded-md mb-1"
                              onClick={() => setOpenMobile(false)}
                            >
                              <Icon className="shrink-0 !w-5 !h-5" />
                              <span>{menu.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            name: "Yash Roy",
            planName: "Free Plan",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
