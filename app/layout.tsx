import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import localFont from "next/font/local"
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "KQR",
  description: "KQR 소개 사이트",
};

const pretendard = localFont({
  src: "./assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full ${pretendard.variable}`}
    >
      <body className="min-h-full flex flex-col select-none">
        <Header />
        <main>
          <div className="max-w-7xl mcenter">
            {children}
          </div>
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
