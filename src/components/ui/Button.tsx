import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-brand-gradient bg-[length:200%_auto] text-white shadow-lg shadow-brand-purple/25 hover:bg-[position:100%_50%] hover:shadow-brand-pink/30 hover:-translate-y-0.5",
  secondary:
    "glass-strong text-white hover:bg-white/[0.12] hover:-translate-y-0.5",
  ghost: "text-white/70 hover:text-white",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: { href: string; variant?: Variant; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "href"
>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
