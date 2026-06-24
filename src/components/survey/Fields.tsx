"use client";

import type { ReactNode } from "react";

export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-2 text-sm font-medium text-white/85">
        {label}
        {required && <span className="text-brand-pink">*</span>}
        {hint && <span className="text-xs font-normal text-white/40">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

const inputBase =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/25";

export function TextInput({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputBase} ${className}`} />;
}

export function TextArea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputBase} min-h-[110px] resize-y ${className}`}
    />
  );
}

export function RadioGroup({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  columns?: number;
}) {
  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition-all ${
              active
                ? "border-transparent bg-brand-gradient text-white shadow-lg shadow-brand-purple/20"
                : "border-white/10 bg-white/5 text-white/75 hover:border-white/25 hover:bg-white/[0.08]"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export function CheckboxGroup({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  columns?: number;
}) {
  const toggle = (opt: string) =>
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]
    );

  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => {
        const active = value.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-left text-sm transition-all ${
              active
                ? "border-brand-purple/60 bg-brand-purple/15 text-white"
                : "border-white/10 bg-white/5 text-white/75 hover:border-white/25 hover:bg-white/[0.08]"
            }`}
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${
                active
                  ? "border-transparent bg-brand-gradient"
                  : "border-white/30"
              }`}
            >
              {active && (
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" fill="none">
                  <path
                    d="M2.5 6.5l2.5 2.5 4.5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export function ScaleInput({
  value,
  onChange,
  lowLabel = "Not important",
  highLabel = "Essential",
}: {
  value: number;
  onChange: (v: number) => void;
  lowLabel?: string;
  highLabel?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
        />
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient font-display text-base font-bold">
          {value}
        </span>
      </div>
      <div className="mt-2 flex justify-between text-xs text-white/40">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
