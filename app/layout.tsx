import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carréstyle",
  description: "Carréstyle - le style de toutes vos envies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
