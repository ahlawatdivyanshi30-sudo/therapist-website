import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { methods } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const m = methods.find((m) => m.slug === params.slug);
  return { title: m ? `${m.title} | Dr. Maya Reynolds, PsyD` : "Method" };
}

export default function MethodDetail({ params }) {
  const m = methods.find((m) => m.slug === params.slug);
  if (!m) return notFound();

  const others = methods.filter((x) => x.slug !== m.slug);

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 md:px-8 pt-14 pb-6">
        <Link href="/methods" className="text-sm text-stone hover:text-ink underline underline-offset-4">
          &larr; All methods
        </Link>
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mt-6 mb-3">Method</p>
        <h1 className="font-serif font-semibold text-5xl text-ink leading-tight">{m.title}</h1>
        <p className="mt-5 text-xl text-stone">{m.summary}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 md:px-8 pb-4">
        <div className="relative aspect-[16/7] rounded-[2rem] overflow-hidden shadow-lg">
          <img src={picsum(img[m.img], 1400, 620)} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-8 py-10 space-y-6 text-lg text-stone leading-relaxed">
        {m.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-clay text-alabaster px-7 py-3.5 font-medium hover:bg-ink transition-colors"
          >
            Ask me about this approach
          </Link>
        </div>
      </section>

      <section className="bg-sage/20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-6">Other methods</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/methods/${o.slug}`}
                className="bg-white rounded-xl p-5 border border-ink/10 hover:border-clay hover:shadow-md transition-all"
              >
                <p className="font-serif text-lg text-ink">{o.short}</p>
                <p className="text-sm text-stone mt-1">{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
