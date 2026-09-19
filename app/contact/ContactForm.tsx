"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `${message}`.trim();
    const subjectLine = subject.trim() || (name ? `Message from ${name}` : "Bluepin enquiry");
    const mailto = `mailto:marketing@bluepin.in?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-7 sm:p-8 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-bold text-theme-text uppercase tracking-wider"
        >
          Your name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="rounded-xl border border-theme-border bg-white dark:bg-theme-bg px-4 py-3 text-theme-text outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow placeholder:text-theme-text-sec/60"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-bold text-theme-text uppercase tracking-wider"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Feedback, support, partnership..."
          className="rounded-xl border border-theme-border bg-white dark:bg-theme-bg px-4 py-3 text-theme-text outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow placeholder:text-theme-text-sec/60"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-bold text-theme-text uppercase tracking-wider"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="How can we help?"
          className="rounded-xl border border-theme-border bg-white dark:bg-theme-bg px-4 py-3 text-theme-text outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow resize-none placeholder:text-theme-text-sec/60"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white text-base px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 self-start"
      >
        <Send className="w-4 h-4" strokeWidth={2.5} />
        Send message
      </button>
      <p className="text-xs text-theme-text-sec -mt-2">
        This opens your email app addressed to{" "}
        <span className="font-semibold">marketing@bluepin.in</span>.
      </p>
    </form>
  );
}