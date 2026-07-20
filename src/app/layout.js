import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Liz Yeh",
  description: "Elizabeth (Liz) Yeh's Personal Website",
  icons: {
    icon: "/brown-star.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-orange-300">
        <Header title="Liz Yeh" className="items-start" />
        <div className="flex flex-1 justify-center items-center">
          {children}
        </div>
        <Footer className="items-baseline" />
      </body>
    </html>
  );
}
