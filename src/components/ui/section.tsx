import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, labelledBy, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 border-t border-line py-20 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">{children}</div>
    </section>
  );
}
