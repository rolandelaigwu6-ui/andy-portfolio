"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [path, setPath] = useState(pathname);

  // Cross-fade between routes. State updates are scheduled in callbacks to
  // avoid cascading renders while synchronizing with the router pathname.
  useEffect(() => {
    if (path === pathname) return;
    setTimeout(() => setVisible(false), 0);
    const timer = setTimeout(() => {
      setPath(pathname);
      setVisible(true);
    }, 160);
    return () => clearTimeout(timer);
  }, [pathname, path]);

  return (
    <div
      className={cn(
        "min-h-0 transition-opacity duration-200 ease-out",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}
