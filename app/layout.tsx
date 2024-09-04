import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TotalPriceProvider } from "@/context/TotalPriceContext";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F3F4F6] dark:bg-[#171717] min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TotalPriceProvider>
            <OrderProvider>
              <SessionProvider>{children}</SessionProvider>
              <Toaster />
            </OrderProvider>
          </TotalPriceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
