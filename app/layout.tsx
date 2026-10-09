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
  metadataBase: new URL("https://bluepin.in"),
  title: "Bluepin | Smarter Diabetes Management with AI",
  description:
    "Bluepin is a diabetes companion with personalised AI insights. Track glucose, analyse health reports and understand your whole health.",
  alternates: {
    canonical: "https://bluepin.in",
  },
  openGraph: {
    type: "website",
    url: "https://bluepin.in/",
    title: "Bluepin | Smarter Diabetes Management with AI",
    description:
      "Bluepin is a diabetes companion with personalised AI insights. Track glucose, analyse health reports and understand your whole health.",
    images: ["https://bluepin.in/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluepin | Smarter Diabetes Management with AI",
    description:
      "Bluepin is a diabetes companion with personalised AI insights. Track glucose, analyse health reports and understand your whole health.",
    images: ["https://bluepin.in/og-image.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bluepin",
              url: "https://bluepin.in",
              logo: "https://bluepin.in/bluepin.webp",
              description:
                "Bluepin is a diabetes companion with personalised AI insights for glucose tracking and health report analysis.",
            }),
          }}
        />
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
