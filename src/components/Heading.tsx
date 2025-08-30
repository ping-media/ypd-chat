import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const headingStyles: Record<string, string> = {
  h1: "scroll-m-20 text-2xl md:text-3xl font-rose font-extrabold tracking-tight",
  h2: "scroll-m-20 text-xl md:text-3xl font-rose font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-rose font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-rose font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-rose font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-rose font-semibold tracking-tight",
};

export default function Heading({
  as = "h1",
  children,
  className,
}: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(headingStyles[as], className)}>
      {children}
    </Component>
  );
}
