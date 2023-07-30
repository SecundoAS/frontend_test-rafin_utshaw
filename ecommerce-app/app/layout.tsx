import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppFooter from "./components/app-components/app-footer/app-footer";
import AppLayout from "./components/app-components/app-layout";
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
        <div className="fixed bg-white w-full z-10">
          <AppLayout />
        </div>
        <div className="flex justify-center pt-32">
          <div className="container">{children}</div>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
