import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import "@/app/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-cormorant", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Andy Okoh Abounu",
    default: "Andy Okoh Abounu — Media & Communications Professional",
  },
  description:
    "Andy Okoh Abounu is a Nigerian media and communications professional based in Abuja, specializing in strategic communications, media relations, digital media management, photography, and visual storytelling.",
  authors: [{ name: "Andy Okoh Abounu" }],
  creator: "Andy Okoh Abounu",
  publisher: "Andy Okoh Abounu",
  robots: "index, follow",
  category: "portfolio",
  openGraph: {
    title: "Andy Okoh Abounu — Media & Communications Professional",
    description:
      "Andy Okoh Abounu is a Nigerian media and communications professional based in Abuja.",
    type: "website",
    locale: "en_NG",
    siteName: "Andy Okoh Abounu",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <Suspense fallback={<div className="nav-shell nav-shell-fallback" aria-hidden="true"><div className="nav-inner"><span className="brand-lockup"><span className="brand-mark">AOA</span><span className="brand-name">Andy Okoh Abounu</span></span></div></div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div className="page-route">{children}</div>}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
