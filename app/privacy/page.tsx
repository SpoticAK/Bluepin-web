import { Metadata } from "next";
import { getLegalDocContent } from "@/lib/legalContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "Privacy Policy | Bluepin",
  description:
    "Read Bluepin's Privacy Policy: how your health data is protected, stored and kept private, and your rights under India's DPDP Act.",
  alternates: {
    canonical: "https://bluepin.in/privacy",
  },
  openGraph: {
    type: "website",
    url: "https://bluepin.in/privacy",
    title: "Privacy Policy | Bluepin",
    description:
      "Read Bluepin's Privacy Policy: how your health data is protected, stored and kept private.",
    images: ["https://bluepin.in/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  const { privacy } = getLegalDocContent();

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-theme-card border border-theme-border rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-headings:text-theme-text prose-a:text-blue-600 dark:prose-a:text-blue-400">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{privacy}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
