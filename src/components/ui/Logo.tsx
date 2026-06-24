export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sm-logo" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="40%" stopColor="#6366f1" />
          <stop offset="75%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f5b942" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#sm-logo)" />
      {/* Two interlocking "mingling" circles */}
      <circle cx="19" cy="24" r="8.5" stroke="white" strokeWidth="2.6" opacity="0.95" />
      <circle cx="29" cy="24" r="8.5" stroke="white" strokeWidth="2.6" opacity="0.95" />
    </svg>
  );
}
