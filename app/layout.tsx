import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRIZZLE - London's Filthiest Smash Burgers",
  description:
    "Smashed thin, stacked high. London's filthiest smash burger, griddled to order across the city. Order now or find your local.",
  openGraph: {
    title: "GRIZZLE - London's Filthiest Smash Burgers",
    description: "Smashed thin, stacked high. Griddled to order across London.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
