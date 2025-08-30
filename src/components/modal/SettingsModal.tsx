import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { cn } from "../../lib/utils";
import { sections } from "./modal-data/SettingData";

export default function SettingsModal() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSettings = location.hash.startsWith("#settings");

  const currentSection =
    location.hash.replace("#settings", "").replace("/", "") || "general";

  const goTo = (section: string) => {
    navigate(`#settings/${section}`, { replace: true });
  };

  // find the current section object
  const active =
    sections.find((s) => s.label === currentSection) || sections[0];
  const ActiveComponent = active.component;

  return (
    <Dialog
      open={isSettings}
      onOpenChange={(isOpen: boolean) => {
        if (!isOpen) navigate(location.pathname, { replace: true });
      }}
    >
      <DialogContent
        className="!max-w-2xl min-h-[500px] w-full rounded-xl border backdrop-blur-xl shadow-2xl shadow-black/20 dark:bg-white/10 dark:border-white/10"
        onOpenAutoFocus={(e) => e.preventDefault()}
        aria-describedby={undefined}
      >
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 relative">
            <ul className="space-y-2 pr-4">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <li
                    key={section.label}
                    onClick={() => goTo(section.label)}
                    className={cn(
                      "cursor-pointer rounded-md px-2 py-1 text-sm transition flex items-center gap-2",
                      currentSection === section.label
                        ? "dark:bg-white/20 dark:text-white font-medium"
                        : "dark:text-gray-300 hover:bg-white/10"
                    )}
                  >
                    <Icon className="size-4" />
                    {section.label.charAt(0).toUpperCase() +
                      section.label.slice(1)}
                  </li>
                );
              })}
            </ul>

            <div className="absolute top-0 right-0 h-full w-px dark:bg-white/10" />
          </div>

          <div className="col-span-3 space-y-4">
            <DialogTitle className="font-rose text-2xl border-b pb-2 mb-0">
              Settings
            </DialogTitle>

            <ActiveComponent />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
