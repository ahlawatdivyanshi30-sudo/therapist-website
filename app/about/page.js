import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToneImage from "@/components/ToneImage";
import { methods, services } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export const metadata = { title: "About | Dr. Maya Reynolds, PsyD" };

const whoIHelp = [
  {
    title: "The high-achiever",
    text: "Functional on the outside, but quietly managing constant worry, tension, or a sense of always bracing for something to go wrong.",
  },
  {
    title: "The burned-out professional",
    text: "Entrepreneurs, creatives, and professionals who've spent years pushing through and feel disconnected from themselves as a result.",
  },
  {
    title: "The one carrying old weight",
    text: "Adults navigating the impact of earlier life experiences that still affect relationships, confidence, or sense of safety today.",
  },
];

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Intro block */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-16 pb-16 grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src="/images/maya-headshot.png"
              alt="Dr. Maya Reynolds, PsyD"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">About</p>
          <h1 className="font-serif font-semibold text-5xl text-ink leading-tight mb-6">
            Hi, I'm Dr. Maya Reynolds.
          </h1>
          <p className="text-xl text-stone leading-relaxed">
            I'm a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-clay text-alabaster px-7 py-3.5 font-medium hover:bg-ink transition-colors">
              Schedule a consultation
            </Link>
            <Link href="/services" className="rounded-full border border-ink/20 px-7 py-3.5 font-medium text-ink hover:border-ink/50 transition-colors">
              See specialties
            </Link>
          </div>
        </div>
      </section>

      {/* Who I help — card block */}
      <section className="bg-sage/20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-20">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Who I work with</p>
          <h2 className="font-serif font-semibold text-3xl text-ink mb-12 max-w-2xl">
            Many of my clients are high-achieving, thoughtful, and
            self-aware &mdash; but internally feel exhausted.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whoIHelp.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <p className="font-serif text-xl text-ink mb-3">{w.title}</p>
                <p className="text-stone leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My approach — text + image block */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <ToneImage src={picsum(img.aboutApproach, 800, 640)} alt="Calm greenery" className="aspect-[5/4] rounded-2xl shadow-lg order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">My approach</p>
          <p className="text-lg text-stone leading-relaxed mb-4">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth.
          </p>
          <p className="text-lg text-stone leading-relaxed mb-6">
            I integrate evidence-based methods to help you understand both
            the emotional and physiological sides of what you're
            experiencing:
          </p>
          <div className="flex flex-wrap gap-3">
            {methods.map((m) => (
              <Link
                key={m.slug}
                href={`/methods/${m.slug}`}
                className="rounded-full bg-white border border-ink/15 px-4 py-2 text-sm text-ink hover:border-clay hover:text-clay transition-colors"
              >
                {m.short}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trauma-informed pull-quote band */}
      <section className="relative">
        <div className="h-[50vh] min-h-[340px] relative">
          <img src={picsum(img.aboutMeet, 1800, 800)} alt="A quiet path through soft light" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="absolute inset-0 flex items-center">
            <p className="mx-auto max-w-2xl text-center px-6 font-serif text-2xl md:text-3xl text-alabaster leading-snug">
              &ldquo;My approach is paced carefully, with an emphasis on
              safety and stabilization &mdash; helping you feel more
              regulated in daily life, not just during sessions.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Where we'll meet */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-xl text-ink mb-2">In-person</p>
          <p className="text-stone">
            My Santa Monica office is a quiet, private space designed to
            feel calm and grounding, with natural light and an uncluttered
            environment.
          </p>
        </div>
        <div>
          <p className="font-serif text-xl text-ink mb-2">Telehealth</p>
          <p className="text-stone">
            Secure video sessions for clients located anywhere in
            California &mdash; just as effective, and often more
            convenient.
          </p>
        </div>
        <div>
          <p className="font-serif text-xl text-ink mb-2">My goal</p>
          <p className="text-stone">
            Not just symptom relief &mdash; insight, resilience, and a
            stronger relationship with yourself over time.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-sage/25">
        <div className="mx-auto max-w-4xl px-6 md:px-8 py-20 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug mb-8">
            &ldquo;If you're looking for a therapist who combines practical
            tools with depth-oriented work &mdash; and who understands the
            realities of living and working in a fast-paced environment
            &mdash; I may be a good fit.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-clay text-alabaster px-8 py-4 font-medium hover:bg-ink transition-colors"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
