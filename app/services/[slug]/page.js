import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((s) => s.slug === params.slug);
  return { title: s ? `${s.title} | Dr. Maya Reynolds, PsyD` : "Specialty" };
}

export default function ServiceDetail({ params }) {
  const s = services.find((s) => s.slug === params.slug);
  if (!s) return notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-14 pb-10">
        <Link href="/services" className="text-sm text-stone hover:text-ink underline underline-offset-4">
          &larr; All specialties
        </Link>
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mt-6 mb-3">Specialty</p>
        <h1 className="font-serif font-semibold text-5xl text-ink max-w-3xl leading-tight">{s.title}</h1>
        <p className="mt-5 text-xl text-stone max-w-2xl">{s.tagline}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-8">
        <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg">
          <img src={picsum(img[s.img], 1600, 700)} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-8 py-12 space-y-6 text-lg text-stone leading-relaxed">
        {s.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-clay text-alabaster px-7 py-3.5 font-medium hover:bg-ink transition-colors"
          >
            Talk to me about this
          </Link>
        </div>
      </section>

      <section className="bg-sage/20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-6">Other specialties</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="bg-white rounded-xl p-5 border border-ink/10 hover:border-clay hover:shadow-md transition-all"
              >
                <p className="font-serif text-lg text-ink">{o.title}</p>
                <p className="text-sm text-stone mt-1">{o.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
