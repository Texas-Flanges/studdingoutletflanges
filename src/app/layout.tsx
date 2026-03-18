import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studding Outlet Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://studdingoutletflanges.com"),
  openGraph: {
    type: "website",
    siteName: "Studding Outlet Flanges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
