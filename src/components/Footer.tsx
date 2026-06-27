import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, Music2, Lock } from "lucide-react";
import { Logo } from "./ui/Logo";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#vision" },
      { label: "Vision", href: "/#vision" },
      { label: "Community", href: "/#testimonials" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Events", href: "/events" },
      { label: "Partnerships", href: "/survey" },
      { label: "Contact", href: "mailto:hello@somingle.io" },
    ],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight">
                So<span className="gradient-text">Mingle</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Connect Better. Experience More. We&apos;re building the future of
              social connection, community, networking, and experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-white/70 transition-all hover:-translate-y-0.5 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SoMingle. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Lock size={15} />
              Admin
            </Link>
            <a
              href="mailto:hello@somingle.io"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail size={16} />
              hello@somingle.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
