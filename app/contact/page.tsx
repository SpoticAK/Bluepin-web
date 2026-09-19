import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";
import AmbientCurves from "@/components/homepage/AmbientCurves";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Bluepin | Get in touch",
  description:
    "Have a question, feedback, or need help with Bluepin? Reach out to us at marketing@bluepin.in or visit us at 34 Pavilion, Sector 34, Noida, Uttar Pradesh.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/contact",
    title: "Contact Bluepin | Get in touch",
    description:
      "Have a question, feedback, or need help with Bluepin? Reach out to us at marketing@bluepin.in or visit us at 34 Pavilion, Sector 34, Noida, Uttar Pradesh.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
};

const contactCards = [
  {
    icon: Mail,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    title: "Email us",
    value: "marketing@bluepin.in",
    href: "mailto:marketing@bluepin.in",
    note: "We usually reply within 1-2 working days.",
  },
  {
    icon: MapPin,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Visit us",
    value: "34 Pavilion, Sector 34, Noida, Uttar Pradesh",
    href: "https://maps.google.com/?q=34+Pavilion+Sector+34+Noida+Uttar+Pradesh",
    note: "Our office in Noida, India.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0">
      <AmbientCurves />

      <main className="relative">
        {/* Hero + contact details */}
        <section className="pt-12 md:pt-16 pb-8 md:pb-10 px-6 md:px-12 max-w-8xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-sm md:text-base font-poppins font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                Contact
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-display tracking-tight text-theme-text leading-[1.05] mb-6">
                Let&apos;s talk.
              </h1>
              <p className="text-xl md:text-2xl font-display text-theme-text max-w-2xl leading-relaxed font-medium">
                Questions, feedback, or ideas for Bluepin — we would love to hear
                from you. Reach out and we&apos;ll get back to you soon.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-6 flex items-start gap-5 hover:bg-white/70 dark:hover:bg-theme-card/70 transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg} ${card.color} shrink-0`}
                  >
                    <card.icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-theme-text">
                      {card.title}
                    </h3>
                    <p className="text-lg text-theme-text font-medium break-words">
                      {card.value}
                    </p>
                    <p className="text-theme-text-sec font-medium">{card.note}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-6 font-bold">
                Send us a message
              </h2>
              <p className="text-lg md:text-xl text-theme-text-sec leading-relaxed font-display font-light">
                Whether you have feedback, a bug to report, or an idea you want
                to share, drop us a line. The form opens your email app with
                everything filled in — just hit send.
              </p>
              <div className="mt-8 flex items-center gap-3 text-theme-text-sec">
                <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">marketing@bluepin.in</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}