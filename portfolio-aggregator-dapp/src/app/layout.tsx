import type { Metadata } from "next";
import { inter } from "@/fonts/font";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio Radar - A web3 data aggregator dapp.",
  description:
    "Portfolio Radar (Port-Radar) is a Decentralized Application (DApp) that enables users to aggregate web3 data in a user friendly & modern UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
