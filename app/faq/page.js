import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/content";

export const metadata = { title: "FAQs | Dr. Maya Reynolds, PsyD" };

export default function FAQ() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 md:px-8 pt-14 pb-10">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-3">FAQs</p>
        <h1 className="font-serif text-5xl text-ink leading-tight mb-4">Questions?</h1>
        <p className="text-lg text-stone">
          Here are some of the most common questions I get about working
          together. If you don't see yours,{" "}
          <Link href="/contact" className="underline underline-offset-4 text-ink hover:text-clay">
            reach out directly
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 md:px-8 pb-24">
        <FaqAccordion faqs={faqs} />
      </section>
      <Footer />
    </main>
  );
}
