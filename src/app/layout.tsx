import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarD } from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-0  ${inter.className}`}>
        <nav className="bg-transparent">
          <NavbarD />
        </nav>
        {children}
        <footer >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
