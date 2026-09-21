import type { Metadata, Viewport } from "next";
import { Poppins, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const garet = localFont({
  src: [
    {
      path: "./fonts/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Garet-Heavy.woff2",
      weight: "800 900",
      style: "normal",
    },
  ],
  variable: "--font-garet",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
    images: ["https://bluepin.in/Bluepin.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bluepin | Diabetes Management with personalised AI insights",
    description:
      "Bluepin is a diabetes management app with personalised AI insights that track your glucose and analyse your health reports to care for your health as a whole.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-N3TDQJHS" />
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${outfit.variable} ${garet.variable} antialiased min-h-screen`}
      >
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1768320231169774');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1768320231169774&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
