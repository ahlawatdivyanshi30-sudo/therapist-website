import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToneImage from "@/components/ToneImage";
import { methods } from "@/lib/content";
import { img, picsum } from "@/lib/images";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -top-24 -right-32 w-[32rem] h-[32rem] rounded-full bg-sage/50 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-24 w-72 h-72 rounded-full bg-clay/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-16 md:pt-24 pb-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-ink/10 px-4 py-1.5 text-xs tracking-wide text-ink/70 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              Santa Monica, CA &middot; In-person &amp; telehealth
            </div>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl leading-[1.08] text-ink">
              We're here to help <span className="italic text-clay">you</span> find solid ground again.
            </h1>
            <p className="mt-6 text-lg text-stone max-w-md">
              Discover a grounded, evidence-based therapy experience with a
              psychologist who understands what it's like to be pushing
              through more than you let on.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-clay text-alabaster px-8 py-4 font-medium shadow-lg shadow-clay/20 hover:bg-ink hover:-translate-y-0.5 transition-all"
              >
                Book an appointment
              </Link>
              <Link href="/about" className="text-ink underline underline-offset-4 hover:text-clay">
                Meet Dr. Reynolds
              </Link>
            </div>
          </div>

          <div className="relative">
            <ToneImage src={picsum(img.heroHome, 900, 1100)} alt="A calm mountain lake at dawn" className="aspect-[4/5] rounded-[2.5rem] shadow-xl" />
            <div className="absolute -bottom-8 -left-8 hidden sm:block bg-white border border-ink/10 rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-serif text-lg text-ink">Evidence-based care</p>
              <p className="text-sm text-stone">CBT &middot; EMDR &middot; Mindfulness</p>
            </div>
          </div>
        </div>
      </section>

      {/* "It seems like nobody else understands..." */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <h2 className="font-serif font-semibold text-4xl text-ink leading-snug">
          It seems like nobody else understands what you're carrying.
        </h2>
        <div className="space-y-5">
          <p className="text-sm tracking-[0.15em] uppercase text-clay font-medium">
            You could be here as a high performer, a caretaker, or simply someone
            trying to navigate the things life has thrown your way.
          </p>
          <p className="text-lg text-stone leading-relaxed">
            I know how exhausting it can be to look &ldquo;fine&rdquo; on the
            outside while quietly managing constant worry, tension, or a
            sense that you're always bracing for something to go wrong. My
            expertise, and my own understanding of high-pressure
            environments, help clients feel safe and understood &mdash; no
            matter what they bring to the table.
          </p>
        </div>
      </section>

      {/* Full-bleed photo statement */}
      <section className="relative">
        <div className="h-[70vh] min-h-[420px] relative">
          <img src={picsum(img.storyFull, 1800, 1000)} alt="A quiet, misty mountain road" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
          <div className="absolute bottom-10 left-6 md:left-16 right-6 md:right-16">
            <h2 className="font-serif font-semibold text-3xl md:text-5xl text-alabaster max-w-3xl leading-tight">
              This isn't the whole story. We're here to help you write the next chapter.
            </h2>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Our Approach</p>
        <h2 className="font-serif font-semibold text-4xl text-ink max-w-3xl leading-snug mb-10">
          Real change starts with understanding yourself &mdash; but you need
          to know <span className="italic text-clay">how</span> to make that
          change happen.
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-5 text-lg text-stone leading-relaxed order-2 md:order-1">
            <p>
              We're here to listen, to honor what you've been through, and to
              help you make sense of your experiences, without judgment or
              preconceived agendas. This is a place where you can show up
              exactly as you are.
            </p>
            <p>
              My goal is to not only help you understand yourself on a
              deeper level, but to give you practical skills you can use in
              daily life. Growth happens through consistency, both in and
              out of sessions.
            </p>
          </div>
          <ToneImage src={picsum(img.approach, 800, 600)} alt="A quiet forest path" className="order-1 md:order-2 aspect-[4/3] rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Together we'll tackle... */}
      <section className="bg-sage/25">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <ToneImage src={picsum(img.together, 700, 700)} alt="A gentle waterfall in soft light" className="aspect-square rounded-2xl shadow-lg" />
          <div>
            <h2 className="font-serif font-semibold text-3xl text-ink leading-snug mb-5">
              Together, we'll tackle the specific challenges you're
              facing &mdash; anxiety, burnout, or feeling disconnected from
              yourself.
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              No one else has lived your life the way you have, so I take
              the time to understand your experience &mdash; not just as a
              clinician, but as someone who genuinely cares. You don't need
              to have it all figured out; you just need to be ready to take
              those first steps.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-ink px-7 py-3.5 font-medium text-ink hover:bg-ink hover:text-alabaster transition-colors"
            >
              Schedule now
            </Link>
          </div>
        </div>
      </section>

      {/* Meet your therapist */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Meet your therapist</p>
        <h2 className="font-serif font-semibold text-4xl text-ink mb-12 max-w-2xl">
          A psychologist dedicated to helping you live your fullest life.
        </h2>
        <div className="max-w-sm">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-lg">
            <img src="/images/maya-headshot.png" alt="Dr. Maya Reynolds, PsyD" className="h-full w-full object-cover" />
          </div>
          <p className="font-serif text-xl text-ink">Dr. Maya Reynolds, PsyD</p>
          <p className="text-stone text-sm mb-3">Licensed Clinical Psychologist</p>
          <Link href="/about" className="underline underline-offset-4 text-ink hover:text-clay text-sm">
            Read full bio &rarr;
          </Link>
        </div>
      </section>

      {/* Our Office — teaser using real office photos, links to full /office page */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Our Office</p>
            <h2 className="font-serif font-semibold text-3xl text-ink leading-snug mb-5">
              A space designed to help you exhale.
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              My office is a quiet, private space designed to feel calm and
              grounding &mdash; natural light, comfortable seating, and an
              uncluttered environment. Clients often tell me the space
              itself helps them feel more at ease before we've even started
              talking.
            </p>
            <Link
              href="/office"
              className="inline-block rounded-full border border-ink px-7 py-3.5 font-medium text-ink hover:bg-ink hover:text-alabaster transition-colors"
            >
              See the office &amp; location
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/office-1.jpg"
              alt="Maya's therapy office, a calm living-room-style space with a sofa, armchair, and bookshelf"
              className="rounded-2xl object-cover h-64 w-full col-span-2 shadow-lg"
            />
            <img
              src="/images/office-2.jpg"
              alt="A cozy corner of the office with tall windows and natural light"
              className="rounded-2xl object-cover h-40 w-full shadow-lg"
            />
            <div className="rounded-2xl bg-sage/30 flex flex-col justify-center px-5 py-4 h-40">
              <p className="font-serif text-base text-ink">45 W 123rd St</p>
              <p className="text-stone text-xs mt-1">Santa Monica, CA 90401</p>
              <p className="text-stone text-xs mt-2">In-person &amp; hybrid sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="bg-sage/25">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden max-w-sm shadow-lg">
            <img src="/images/maya-headshot.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif font-semibold text-3xl text-ink mb-6">
              A <span className="italic text-clay">note</span> from me
            </h2>
            <p className="text-lg text-stone leading-relaxed italic">
              &ldquo;I believe therapy works best when clients feel
              respected, understood, and actively involved in the process.
              My goal is not just symptom relief, but helping you develop
              insight, resilience, and a stronger relationship with yourself
              over time.&rdquo;
            </p>
            <p className="mt-4 text-ink font-serif text-lg">&mdash; Dr. Maya Reynolds, PsyD</p>
          </div>
        </div>
      </section>

      {/* Methods teaser */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-20">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Methods</p>
        <h2 className="font-serif font-semibold text-4xl text-ink mb-10">
          Some of the <span className="italic text-clay">methods</span> we use
        </h2>
        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {methods.map((m) => (
            <Link key={m.slug} href={`/methods/${m.slug}`} className="flex items-center justify-between py-6 group">
              <span className="font-serif text-xl text-ink group-hover:text-clay transition-colors">{m.title}</span>
              <span className="text-ink/30 group-hover:text-clay transition-colors text-xl">+</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-24 grid md:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-xl">
        <img src={picsum(img.closeGap, 900, 900)} alt="A calm forest lake" className="h-full w-full object-cover aspect-[4/3] md:aspect-auto" />
        <div className="bg-sage/25 flex flex-col justify-center px-10 py-14">
          <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-4">Book an appointment</p>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink leading-tight mb-5">
            It's time to close the gap between the life you want and the
            life you're <span className="italic text-clay">living</span>.
          </h2>
          <p className="text-stone mb-8">
            Sessions available both online and in-person, based in Santa Monica.
          </p>
          <Link
            href="/contact"
            className="inline-block w-fit rounded-full border border-ink px-7 py-3.5 font-medium text-ink hover:bg-ink hover:text-alabaster transition-colors"
          >
            Book now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
