import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexavine Technologies — AI Solutions & Product Engineering",
  description:
    "Nexavine Technologies designs and builds AI-powered products, workflow automation systems, and intelligent business platforms for logistics, trade and operations teams.",
  openGraph: {
    title: "Nexavine Technologies — AI Solutions That Automate Complex Business Workflows",
    description:
      "A boutique AI product studio building workflow automation and intelligent software for businesses across the UAE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
