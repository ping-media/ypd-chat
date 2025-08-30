import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full md:w-[90%] lg:w-[80%] mx-auto", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Container.displayName = "Container";

export default Container;
