import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Bluepin | Diabetes Management with personalised AI insights",
  description:
    "Bluepin is a diabetes management app with personalised AI insights that track your glucose and analyse your health reports to care for your health as a whole.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/",
    title:
      "Bluepin | Diabetes Management with personalised AI insights",
    description:
      "Bluepin is a diabetes management app with personalised AI insights that track your glucose and analyse your health reports to care for your health as a whole.",
    images: ["https://bluepin.in/bluepin.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bluepin | Diabetes Management with personalised AI insights",
    description:
      "Bluepin is a diabetes management app with personalised AI insights that track your glucose and analyse your health reports to care for your health as a whole.",
    images: ["https://bluepin.in/bluepin.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="preconnect" href="https://connect.facebook.net" />
      <GoogleTagManager gtmId="GTM-N3TDQJHS" />
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <MetaPixel />
        </ThemeProvider>
      </body>
    </html>
  );
}
