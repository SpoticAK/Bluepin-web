"use client";

import React from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X } from "lucide-react";
import { LegalDocType } from "../lib/consentManager";
import { cn } from "../lib/utils";

interface LegalDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: LegalDocType;
  termsContent: string;
  privacyContent: string;
}

export function LegalDocsModal({
  isOpen,
  onClose,
  defaultTab = "terms",
  termsContent,
  privacyContent,
}: LegalDocsModalProps) {
  const [selectedTab, setSelectedTab] = React.useState<LegalDocType | null>(
    null,
  );
  const [prevDefaultTab, setPrevDefaultTab] = React.useState(defaultTab);

  if (prevDefaultTab !== defaultTab) {
    setPrevDefaultTab(defaultTab);
    setSelectedTab(null);
  }

  const activeTab = selectedTab ?? defaultTab;

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-100 bg-theme-text/20 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-theme-card w-full max-w-3xl max-h-[90vh] rounded-2xl sm:rounded-3xl shadow-xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-theme-border">
          <h2 className="text-xl font-bold text-theme-text">Legal Documents</h2>
          <button
            onClick={onClose}
            className="p-2 bg-theme-bg hover:bg-theme-border text-theme-text-sec hover:text-theme-text rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex bg-theme-bg p-2 sm:px-6 overflow-x-auto border-b border-theme-border gap-2 shrink-0 hide-scrollbar">
          {(["terms", "privacy"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors",
                activeTab === tab
                  ? "bg-theme-card text-theme-text shadow-sm"
                  : "text-theme-text-sec hover:text-theme-text hover:bg-theme-card/50",
              )}
            >
              {tab === "terms" && "Terms of Service"}
              {tab === "privacy" && "Privacy Policy"}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-headings:text-theme-text prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {activeTab === "terms" ? termsContent : privacyContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}