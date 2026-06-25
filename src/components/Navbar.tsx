"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { Logo } from "./ui/Logo";

const links = [
  { href: "/#problem", label: "The Problem" },
  { href: "/#vision", label: "Vision" },
  { href: "/#mission", label: "Mission" },
  { href: "/#testimonials", label: "Community" },
  { href: "/survey", label: "Survey" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="SoMingle home">
            <Logo className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-tight">
              So<span className="gradient-text">Mingle</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <ButtonLink href="/survey" className="px-5 py-2.5">
              Help Shape SoMingle
            </ButtonLink>
          </div>

          <button
            className="rounded-lg p-2 text-white/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <ButtonLink
                href="/survey"
                className="mt-1"
                onClick={() => setOpen(false)}
              >
                Help Shape SoMingle
              </ButtonLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
