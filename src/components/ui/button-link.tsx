import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: string;
  className?: string;
};

const variants = {
  primary: "bg-accent text-bg hover:bg-[#7d9bff]",
  secondary: "border border-line bg-transparent text-ink hover:border-accent/50 hover:bg-white/[0.03]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  className,
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
