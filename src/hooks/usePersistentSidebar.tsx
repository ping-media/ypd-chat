import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getCookie, setCookie } from "@/lib/cookies";

interface SidebarState {
  isLeftOpen: boolean;
  setLeftOpen: (val: boolean) => void;
  toggleLeft: () => void;
  isRightOpen: boolean;
  setRightOpen: (val: boolean) => void;
  toggleRight: () => void;
}

const SidebarContext = createContext<SidebarState | undefined>(undefined);

export function SidebarPersistProvider({ children }: { children: ReactNode }) {
  const [isLeftOpen, setLeftOpen] = useState(
    () => getCookie("sidebar_state_left") !== "false"
  );
  const [isRightOpen, setRightOpen] = useState(
    () => getCookie("sidebar_state_right") !== "false"
  );

  // persist to cookies
  useEffect(() => {
    setCookie("sidebar_state_left", String(isLeftOpen));
  }, [isLeftOpen]);

  useEffect(() => {
    setCookie("sidebar_state_right", String(isRightOpen));
  }, [isRightOpen]);

  return (
    <SidebarContext.Provider
      value={{
        isLeftOpen,
        setLeftOpen,
        toggleLeft: () => setLeftOpen((prev) => !prev),
        isRightOpen,
        setRightOpen,
        toggleRight: () => setRightOpen((prev) => !prev),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function usePersistSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside <SidebarProvider>");
  return ctx;
}
