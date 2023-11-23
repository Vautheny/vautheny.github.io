import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Socials from "./components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vautheny - Portfolio",
  description: "Software development portfolio and CV for Marc Vautheny.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Socials />
        {children}
      </body>
    </html>
  );
}
