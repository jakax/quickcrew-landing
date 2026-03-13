import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickCrew",
  description:
    "QuickCrew helps hospitality businesses connect with casual workers faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-950 antialiased">{children}</body>
    </html>
  );
}
