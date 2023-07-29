import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLayout from "./components/app-layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout />
        <div className="flex justify-center">
          <div className="container mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
