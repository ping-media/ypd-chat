import { ChevronsUpDown, LogOut, Settings, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import useDialogState from "@/hooks/use-dialog-state";
import LogoutModal from "../modal/LogoutModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function NavUser() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();

  return (
    <>
      <SidebarMenu className="group-data-[collapsible=icon]:rounded-md group-data-[collapsible=icon]:p-1 dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/20 dark:hover:bg-white/30 shadow-light rounded-xl outline-none group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="xl"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.first_name} />
                  <AvatarFallback className="rounded-lg">YPD</AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate capitalize font-semibold">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="truncate text-xs">{user.role}</span>
                </div>

                <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/20 dark:hover:bg-white/30"
              side={isMobile ? "bottom" : "top"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.first_name} />
                    <AvatarFallback className="rounded-lg">YPD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate capitalize font-semibold">
                      {user.first_name} {user.last_name}
                    </span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  {/* <Link to={"/pricing"}> */}
                  <Sparkles />
                  Upgrade Plan
                  {/* </Link> */}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link to={"#settings"}>
                    <Settings />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="!text-red-10" asChild>
                <div onClick={() => setOpen(true)}>
                  <LogOut />
                  Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <LogoutModal open={!!open} setOpen={setOpen} />
    </>
  );
}
