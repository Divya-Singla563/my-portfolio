import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-background">
      <div className="container-page">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-[var(--accent)] text-lg font-bold text-white">
                {SITE.name.slice(0, 1).toUpperCase()}
              </span>
              <div>
                <div className="text-lg font-bold text-foreground">
                  {SITE.name}
                </div>
                <div className="text-sm text-[var(--muted)]">{SITE.role}</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Building modern, scalable web and mobile applications using React, Next.js, React Native, and Web3 technologies with clean code and best practices.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <div className="text-base font-bold tracking-wide text-foreground mb-4">
              Contact
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">
                  Email
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">
                  Phone
                </span>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">
                  Location
                </span>
                <span className="text-[var(--muted)]">
                  {SITE.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <div className="text-base font-bold tracking-wide text-foreground mb-4">
              Social Links
            </div>
            <ul className="grid gap-3 text-sm">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)] group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
