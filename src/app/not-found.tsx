import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-[1120px] flex-col justify-center px-5 py-20 sm:px-8">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">This page is not on the site.</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The address may be out of date. The project write-ups are still on the homepage.
      </p>
      <Link
        href="/#projects"
        className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:text-ink"
      >
        Back to Projects
      </Link>
    </section>
  );
}
