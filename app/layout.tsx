import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftMenu from "@/app/components/menu/LeftMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Students Lab",
  description: "A platform for managing students and their tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
