import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusForge",
  description: "A premium connector helping companies find strategic business partners, advisors, clients, and growth opportunities.",
  metadataBase: new URL("https://boardroomconnect.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NexusForge",
    description: "Find the right partners, advisors, and growth opportunities with a connector-led advisory platform.",
    type: "website",
  },
};

import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased text-white`}
    >
      <body className="min-h-full bg-[#060708] text-white selection:bg-cyan-300/25 selection:text-white">
        <Script
          id="cal-popup-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal;
                  let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else {
                      p(cal, ar);
                    }
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");

              Cal("init", "signal-audit", { origin: "https://app.cal.com" });
              Cal.config = Cal.config || {};
              Cal.config.forwardQueryParams = true;

              Cal.ns["signal-audit"]("ui", {
                cssVarsPerTheme: {
                  dark: {
                    "cal-brand": "#1c1919"
                  }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
              });
            `,
          }}
        />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
