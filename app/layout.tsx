import type { Metadata } from "next";
import { publicAsset } from "./public-assets";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Happyland Schools | Nairobi, Kenya", template: "%s | Happyland Schools" },
  description: "Explore the Happyland family of schools, from early years to senior school, and plan a visit to one of our four campuses.",
  icons: { icon: publicAsset("/images/crest.png") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}
