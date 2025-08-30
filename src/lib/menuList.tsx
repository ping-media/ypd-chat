import { CheckCircle, Lock, Clipboard as ClipboardIcon } from "lucide-react";
import { icons } from "./constant";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  target?: "_blank" | "_self";
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/profile",
          label: "Student Profile",
          active: pathname.includes("/"),
          icon: icons.user,
          submenus: [],
        },
        {
          href: "/language",
          label: "Switch Language",
          active: pathname.includes("/language"),
          icon: icons.language,
          submenus: [],
        },
        {
          href: "/key-guideline",
          label: "Key Guideline",
          active: pathname.includes("/key-guideline"),
          icon: icons.key,
          submenus: [],
        },
        {
          href: "/privacy",
          label: "Privacy & Consent",
          active: pathname.includes("/privacy"),
          icon: icons.Security,
          submenus: [],
        },
        {
          href: "/support",
          label: "Help / Contact",
          active: pathname.includes("/support"),
          icon: icons.help,
          submenus: [],
        },
        {
          href: "/reports",
          label: "Reports",
          active: pathname.includes("/reports"),
          icon: icons.help,
          submenus: [],
        },
        {
          href: "/session-reset",
          label: "Session Reset",
          active: pathname.includes("/session-reset"),
          icon: icons.help,
          submenus: [],
        },
        {
          href: "/upgrade",
          label: "Upgrade",
          active: pathname.includes("/upgrade"),
          icon: icons.info,
          submenus: [],
        },
      ],
    },
  ];
}

export const rightSidebarList = [
  {
    title: "My Setup",
    icon: CheckCircle,
    isExpanded: true,
    submenu: [
      { label: "Profile Setup", href: "/setup/profile" },
      {
        label: "Interest & Strengths Discovery",
        href: "/setup/interest-strengths",
      },
    ],
  },
  {
    title: "Core Assessment",
    icon: ClipboardIcon,
    isExpanded: true,
    submenu: [
      { label: "Values & Work Preferences", href: "/assessment/values-work" },
      {
        label: "Learning Style + Personality",
        href: "/assessment/learning-style",
      },
      { label: "Passion–Career Alignment", href: "/assessment/passion-career" },
    ],
  },
  {
    title: "Cognitive & Emotional Assessment",
    icon: Lock,
    isExpanded: true,
    submenu: [
      { label: "Cognitive Problem-Solving", href: "/assessment/cognitive" },
      {
        label: "Emotional Intelligence & Ethics",
        href: "/assessment/emotional-ethics",
      },
      { label: "Passion–Career Alignment", href: "/assessment/passion-career" },
    ],
  },
  {
    title: "Synthesis & Education Pathways",
    icon: Lock,
    isExpanded: true,
    submenu: [
      {
        label: "Career Direction Synthesis",
        href: "/synthesis/career-direction",
      },
      {
        label: "Education Pathway Guidance",
        href: "/synthesis/education-pathway",
      },
    ],
  },
  {
    title: "Action & Final Report",
    icon: Lock,
    isExpanded: true,
    submenu: [
      { label: "Personal Action Planning", href: "/action/personal-planning" },
      {
        label: "Completion & Report Generation",
        href: "/action/report-generation",
      },
    ],
  },
];
