import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavBadge = ({ children }: { children: ReactNode }) => (
  <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>
);

function checkIsActive(href: string, item: any, mainNav = false) {
  return (
    href === item.href ||
    href.split("?")[0] === item.href ||
    !!item?.submenu?.filter((i: any) => i.href === href).length ||
    (mainNav &&
      href.split("/")[1] !== "" &&
      href.split("/")[1] === item?.href?.split("/")[1])
  );
}

const SidebarMenuCollapsedDropdown = ({
  item,
  href,
}: {
  item: any;
  href: string;
}) => {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            {item?.icon && <item.icon />}
            <span>{item.title}</span>
            {item?.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={4}>
          <DropdownMenuLabel>
            {item.title} {item?.badge ? `(${item.badge})` : ""}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.submenu.map((sub: any) => (
            <DropdownMenuItem key={`${sub.label}-${sub.url}`} asChild>
              <Link
                to={sub.href}
                className={`${checkIsActive(href, sub) ? "bg-secondary" : ""}`}
              >
                {sub?.icon && <sub.icon />}
                <span className="max-w-52 text-wrap">{sub.label}</span>
                {sub?.badge && (
                  <span className="ml-auto text-xs">{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};

// const SidebarMenuCollapsible = ({
//   item,
//   href,
// }: {
//   item: any;
//   href: string;
// }) => {
//   return (
//     <Collapsible
//       asChild
//       defaultOpen={item.isExpanded || checkIsActive(href, item, true)}
//       className="group/collapsible"
//     >
//       <SidebarMenuItem>
//         <CollapsibleTrigger asChild>
//           <SidebarMenuButton tooltip={item.title}>
//             {item.icon && <item.icon />}
//             <span>{item.title}</span>
//             {item?.badge && <NavBadge>{item.badge}</NavBadge>}
//             <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
//           </SidebarMenuButton>
//         </CollapsibleTrigger>
//         <CollapsibleContent className="CollapsibleContent">
//           <SidebarMenuSub>
//             {item.submenu.map((subItem: any, index: number) => (
//               <SidebarMenuSubItem key={`${subItem.title}_${index}`}>
//                 <SidebarMenuSubButton
//                   asChild
//                   isActive={checkIsActive(href, subItem)}
//                 >
//                   {/* <Link to={subItem.url} onClick={() => setOpenMobile(false)}> */}
//                   <Link to={subItem.href}>
//                     {subItem?.icon && <subItem.icon />}
//                     <span>{subItem.label}</span>
//                     {subItem?.badge && <NavBadge>{subItem.badge}</NavBadge>}
//                   </Link>
//                 </SidebarMenuSubButton>
//               </SidebarMenuSubItem>
//             ))}
//           </SidebarMenuSub>
//         </CollapsibleContent>
//       </SidebarMenuItem>
//     </Collapsible>
//   );
// };
const SidebarMenuCollapsible = ({
  item,
  href,
}: {
  item: any;
  href: string;
}) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <Collapsible
      asChild
      defaultOpen={item.isExpanded || checkIsActive(href, item, true)}
      className="group/collapsible"
    >
      <SidebarMenuItem className="group-data-[collapsible=icon]:flex items-center justify-center">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            {item?.badge && <NavBadge>{item.badge}</NavBadge>}

            {hasSubmenu && (
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>

        {hasSubmenu && (
          <CollapsibleContent className="CollapsibleContent">
            <SidebarMenuSub>
              {item.submenu.map((subItem: any, index: number) => (
                <SidebarMenuSubItem key={`${subItem.title}_${index}`}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={checkIsActive(href, subItem)}
                  >
                    <Link to={subItem.href}>
                      {subItem?.icon && <subItem.icon />}
                      <span>{subItem.label}</span>
                      {subItem?.badge && <NavBadge>{subItem.badge}</NavBadge>}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
};

export { SidebarMenuCollapsedDropdown, SidebarMenuCollapsible };
