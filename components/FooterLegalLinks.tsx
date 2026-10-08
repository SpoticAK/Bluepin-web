import Link from "next/link";

export default function FooterLegalLinks() {
  return (
    <div className="flex gap-6">
      <Link
        href="/terms"
        className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        Terms of Service
      </Link>
      <Link
        href="/privacy"
        className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        Privacy Policy
      </Link>
      <Link
        href="/contact"
        className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
}
