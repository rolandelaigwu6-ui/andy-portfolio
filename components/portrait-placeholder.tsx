"use client";

interface PortraitPlaceholderProps {
  className?: string;
}

export function PortraitPlaceholder({ className }: PortraitPlaceholderProps) {
  return (
    <div
      className={className}
      aria-label="Portrait placeholder for Andy Okoh Abounu — approved photography to be added"
      role="img"
      style={{
        background:
          "radial-gradient(circle at 30% 40%, #ffffff 0%, #e8e2d6 55%, #d8ba7d 100%)",
        border: "2px solid #d8ba7d",
      } as React.CSSProperties}
    >
      <svg
        width="64"
        height="64"
        fill="none"
        stroke="#d8ba7d"
        strokeWidth="2"
        className="mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" stroke="#d8ba7d" strokeWidth="2" fill="none" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <p className="text-xs text-slate text-center font-sans">
        Portrait of Andy Okoh Abounu — approved photography to be added
      </p>
    </div>
  );
}
