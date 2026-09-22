"use client";
import Link from "next/link";
import { useState } from "react";
import { services, methods } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null); // "services" | "methods" | null

  return (
    <header className="sticky top-0 z-50 bg-alabaster/95 backdrop-blur border-b border-ink/10">
      <nav className="mx-auto max-w-6xl px-6 md:px-8 h-24 flex items-center justify-between relative">
        <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-serif text-2xl text-ink">Maya Reynolds</span>
          <span className="block text-[11px] tracking-[0.25em] text-clay uppercase">PsyD, Psychology</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-[15px] text-ink/75">
          <Link href="/about" className="relative group">
            About
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHover("services")}
            onMouseLeave={() => setHover(null)}
          >
            <Link href="/services" className="relative group">
              Specialties
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
            </Link>
            {hover === "services" && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-alabaster border border-ink/10 rounded-xl shadow-xl py-3 w-64">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-5 py-2 text-sm text-ink/80 hover:text-clay hover:bg-sage/20"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHover("methods")}
            onMouseLeave={() => setHover(null)}
          >
            <Link href="/methods" className="relative group">
              Methods
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
            </Link>
            {hover === "methods" && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-alabaster border border-ink/10 rounded-xl shadow-xl py-3 w-64">
                {methods.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/methods/${m.slug}`}
                    className="block px-5 py-2 text-sm text-ink/80 hover:text-clay hover:bg-sage/20"
                  >
                    {m.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/office" className="relative group">
            Office
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/faq" className="relative group">
            FAQs
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-block rounded-full border border-ink px-6 py-2.5 text-sm font-medium text-ink hover:bg-ink hover:text-alabaster transition-colors"
          >
            Contact
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-6 h-px bg-ink" />
            <span className="block w-6 h-px bg-ink" />
            <span className="block w-6 h-px bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-alabaster px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link href="/about" onClick={() => setOpen(false)} className="text-ink text-lg">About</Link>

          <div>
            <Link href="/services" onClick={() => setOpen(false)} className="text-ink text-lg">Specialties</Link>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="text-stone text-sm">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link href="/methods" onClick={() => setOpen(false)} className="text-ink text-lg">Methods</Link>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {methods.map((m) => (
                <Link key={m.slug} href={`/methods/${m.slug}`} onClick={() => setOpen(false)} className="text-stone text-sm">
                  {m.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/office" onClick={() => setOpen(false)} className="text-ink text-lg">Office</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="text-ink text-lg">FAQs</Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-ink px-6 py-2.5 text-center text-sm font-medium text-ink"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
