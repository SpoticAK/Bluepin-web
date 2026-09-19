"use client";

import { useState } from "react";
import { LegalDocsModal } from "./LegalDocsModal";

interface FooterLegalLinksProps {
  termsContent: string;
  privacyContent: string;
}

export default function FooterLegalLinks({
  termsContent,
  privacyContent,
}: FooterLegalLinksProps) {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"terms" | "privacy">("terms");

  const openLegal = (tab: "terms" | "privacy") => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-6">
        <button
          onClick={() => openLegal("terms")}
          className="hover:text-theme-text transition-colors cursor-pointer"
        >
          Terms of Service
        </button>
        <button
          onClick={() => openLegal("privacy")}
          className="hover:text-theme-text transition-colors cursor-pointer"
        >
          Privacy Policy
        </button>
      </div>

      <LegalDocsModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalTab}
        termsContent={termsContent}
        privacyContent={privacyContent}
      />
    </>
  );
}
