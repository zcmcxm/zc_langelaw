import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "../components";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { ...AppMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen scroll-smooth">
        <AppHeader />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
