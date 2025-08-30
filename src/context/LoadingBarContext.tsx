import React, { createContext, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import type { LoadingBarRef } from "react-top-loading-bar";

const LoadingBarContext =
  createContext<React.RefObject<LoadingBarRef | null> | null>(null);

export const LoadingBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<LoadingBarRef>(null);

  return (
    <LoadingBarContext.Provider value={ref}>
      <LoadingBar
        color={`var(--color-theme-primary)`}
        ref={ref}
        shadow={true}
        height={2}
      />
      {children}
    </LoadingBarContext.Provider>
  );
};

export const useLoadingBar = () => {
  const ref = useContext(LoadingBarContext);
  if (!ref)
    throw new Error("useLoadingBar must be used within LoadingBarProvider");
  return ref;
};
