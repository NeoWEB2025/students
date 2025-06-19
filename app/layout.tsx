import type { Metadata } from "next";
import {Inter, Montserrat} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

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
      <body className={`inter.className bg-black ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
