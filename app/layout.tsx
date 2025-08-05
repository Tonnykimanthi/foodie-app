import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Components
import Navbar from "./components/layout/Navbar";
// Context
import { MealsContextProvider } from "../app/contexts/MealsContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Foodie App",
  description: "Recipe Web App created by Tonny Kimanthi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-gray-50 text-black antialiased`}
      >
        <MealsContextProvider>
          <Navbar />
          {children}
        </MealsContextProvider>
      </body>
    </html>
  );
}
