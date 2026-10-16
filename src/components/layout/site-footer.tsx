import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-muted">Software developer · UET Lahore · Class of 2027</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a className="text-muted transition-colors hover:text-ink" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
