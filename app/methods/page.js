import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { methods } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export const metadata = { title: "Methods | Dr. Maya Reynolds, PsyD" };

export default function MethodsIndex() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-14 pb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-3">Methods</p>
        <h1 className="font-serif font-semibold text-5xl text-ink max-w-2xl leading-tight">
          Some of the <span className="italic text-clay">methods</span> I use
        </h1>
        <p className="mt-5 text-lg text-stone max-w-2xl">
          Every client is different, so I draw from a few evidence-based
          approaches depending on what you're working through.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-24 grid md:grid-cols-2 gap-8">
        {methods.map((m) => (
          <Link
            key={m.slug}
            href={`/methods/${m.slug}`}
            className="group flex gap-6 items-center bg-white/60 hover:bg-white rounded-2xl border border-ink/10 hover:border-clay hover:shadow-lg p-5 transition-all"
          >
            <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden">
              <img
                src={picsum(img[m.img], 300, 300)}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            </div>
            <div>
              <h2 className="font-serif text-2xl text-ink group-hover:text-clay transition-colors">
                {m.title}
              </h2>
              <p className="text-stone mt-1">{m.summary}</p>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
