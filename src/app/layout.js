import Link from "next/link";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FooterStick from "../components/FooterStick";
import Footer from "../components/Footer";
import ContactButtons from "@/components/ContactButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MintoMarkets Landing",
  description: "Landing page demo with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans text-gray-800">
        <Header /> {/* <-- use header here */}
        {children}
        <ContactButtons />
        <FooterStick />
      </body>
    </html>
  );
}
