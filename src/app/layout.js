import Link from "next/link";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FooterStick from "../components/FooterStick";
import Footer from "../components/Footer";
import ContactButtons from "@/components/ContactButtons";
import LanguageSwitcher, { LanguageSelector } from "@/components/LanguageSwitcher";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ANN Multimedia",
  description: "Landing page demo with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="flex h-full flex-col justify-between font-sans text-gray-800">
        <LanguageSwitcher>
          <Header className="Shrine-0" />
          {children}
          {/* <FooterStick className="Shrink-0" /> */}
        </LanguageSwitcher>
      </body>
    </html>
  );
}
