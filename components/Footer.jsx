import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-alabaster/80">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-2xl text-alabaster">Maya Reynolds, PsyD</p>
          <p className="mt-3 text-sm">
            Licensed Clinical Psychologist &middot; Santa Monica, CA
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-alabaster/50 mb-4 uppercase">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-alabaster">About</Link></li>
            <li><Link href="/services" className="hover:text-alabaster">Specialties</Link></li>
            <li><Link href="/methods" className="hover:text-alabaster">Methods</Link></li>
            <li><Link href="/faq" className="hover:text-alabaster">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-alabaster/50 mb-4 uppercase">Office</p>
          <p className="text-sm">45 W 123rd St</p>
          <p className="text-sm">Santa Monica, CA 90401</p>
          <Link href="/office" className="text-sm underline underline-offset-4 mt-2 inline-block">
            View office &amp; directions
          </Link>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-alabaster/50 mb-4 uppercase">Get started</p>
          <p className="text-sm mb-4">Ready to talk? I'd love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-clay text-alabaster px-6 py-2.5 text-sm font-medium hover:bg-alabaster hover:text-ink transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="border-t border-alabaster/10 py-6 text-center text-xs text-alabaster/50">
        &copy; {new Date().getFullYear()} Maya Reynolds, PsyD. All rights reserved. (Fictional practice, for demonstration purposes.)
      </div>
    </footer>
  );
}
