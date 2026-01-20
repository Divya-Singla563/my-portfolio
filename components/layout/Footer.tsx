import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-(--border) bg-background">
      <div className="container-page">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-foreground text-sm font-semibold text-background">
                {SITE.name.slice(0, 1).toUpperCase()}
              </span>
              <div>
                <div className="text-base font-semibold text-foreground">
                  {SITE.name}
                </div>
                <div className="text-sm text-(--muted)">{SITE.role}</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-(--muted)">
              I build modern, fast, and accessible web experiences with a clean
              UI and strong attention to detail.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-foreground">
              Pages
            </div>
            <ul className="mt-4 grid gap-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md text-(--muted) transition-colors hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-foreground">
              Contact
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-(--muted)">
              <li>
                <span className="font-medium text-foreground">
                  Email:
                </span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-(--muted) transition-colors hover:text-(--accent)"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Phone:
                </span>{" "}
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-(--muted) transition-colors hover:text-(--accent)"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Location:
                </span>{" "}
                {SITE.location}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-foreground">
              Social
            </div>
            <ul className="mt-4 grid gap-2 text-sm">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md text-(--muted) transition-colors hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-(--border) py-6 text-sm text-(--muted) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-(--accent)"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-(--accent)"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
