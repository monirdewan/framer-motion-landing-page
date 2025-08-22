import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?:string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] space-x-5  px-[20px]", className )}>
      {children}
    </div>
  );
};

export default Container;
