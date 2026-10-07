import type { Metadata, Viewport } from "next";
import "./globals.css";
import Shell from "@/components/portfolio/Shell";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080f1e",
};
export const metadata: Metadata = {
  title: "Hamza Yakubu | Strategic Communications & Public Engagement",
  description:
    "Hamza Yakubu is a strategic communications and public engagement professional connecting leadership, institutions and communities through strategy and storytelling.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Hamza Yakubu | Strategy. Story. Impact.",
    description:
      "Strategic communications, public engagement and international positioning.",
  },
  twitter: {
    card: "summary",
    title: "Hamza Yakubu | Strategy. Story. Impact.",
    description: "Strategic communications and public engagement professional.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
