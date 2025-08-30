import {
  Settings,
  Bell,
  ShieldCheckIcon,
  UserCircle2,
  LucideIcon,
} from "lucide-react";
import GeneralSettings from "./Settings/GeneralSettings";
import NotificationsSettings from "./Settings/NotificationsSettings";
import SecuritySettings from "./Settings/SecuritySettings";
import AccountSettings from "./Settings/AccountSettings";

type settingsList = {
  icon: LucideIcon;
  label: string;
  component: React.ComponentType;
};

export const sections: settingsList[] = [
  { icon: Settings, label: "general", component: GeneralSettings },
  { icon: Bell, label: "notifications", component: NotificationsSettings },
  { icon: ShieldCheckIcon, label: "security", component: SecuritySettings },
  { icon: UserCircle2, label: "account", component: AccountSettings },
];
