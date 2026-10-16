"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site, type NavId } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<NavId | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;

    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id && navItems.some((item) => item.id === id)) {
          setActiveId(id as NavId);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const current: NavId | null = pathname.startsWith("/projects")
    ? "projects"
    : pathname === "/"
      ? activeId
      : null;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="h-px bg-gradient-to-r from-accent via-accent-2 to-transparent" />
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-md" aria-label={`${site.name}, home`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line font-display text-xs font-semibold tracking-tight text-accent">
            HA
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = current === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "text-[13px] tracking-wide transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-2 lg:hidden" aria-label="Mobile">
          <ul>
            {navItems.map((item) => {
              const active = current === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "block rounded-md py-3 text-base",
                      active ? "text-ink" : "text-muted",
                    )}
                    onClick={() => setMenuPath(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
