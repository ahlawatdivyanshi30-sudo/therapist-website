import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export const metadata = { title: "Specialties | Dr. Maya Reynolds, PsyD" };

export default function ServicesIndex() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-14 pb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-3">Specialties</p>
        <h1 className="font-serif font-semibold text-5xl text-ink max-w-2xl leading-tight">
          Where we might start
        </h1>
        <p className="mt-5 text-lg text-stone max-w-2xl">
          These are the areas clients most often bring to me. Every plan is
          shaped around your specific history and goals — click through to
          read more about each.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-24 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex gap-6 items-center bg-white/60 hover:bg-white rounded-2xl border border-ink/10 hover:border-clay hover:shadow-lg p-5 transition-all"
          >
            <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden">
              <img
                src={picsum(img[s.img], 300, 300)}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            </div>
            <div>
              <h2 className="font-serif text-2xl text-ink group-hover:text-clay transition-colors">{s.title}</h2>
              <p className="text-stone mt-1">{s.tagline}</p>
              <span className="inline-block mt-2 text-sm underline underline-offset-4 text-ink/60">
                Read more &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
