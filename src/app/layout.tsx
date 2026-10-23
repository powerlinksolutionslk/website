import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Powerlink Solutions | Powering everyday possibilities",
  description: "Explore electronic products and solutions from Powerlink Solutions. Water heaters, automobile battery chargers, smart plugs and smart bulbs for everyday living.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
