import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Our Office | Dr. Maya Reynolds, PsyD" };

export default function Office() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 md:px-8 pt-14 pb-10">
        <p className="text-sm tracking-[0.2em] uppercase text-clay font-medium mb-3">Our Office</p>
        <h1 className="font-serif text-5xl text-ink max-w-2xl leading-tight">
          A space designed to help you exhale.
        </h1>
        <p className="mt-5 text-lg text-stone max-w-2xl">
          My office is a quiet, private space designed to feel calm and
          grounding &mdash; natural light, comfortable seating, and an
          uncluttered environment. Clients often tell me the space itself
          helps them feel more at ease before we've even started talking.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 pb-16 grid md:grid-cols-2 gap-6">
        <img
          src="/images/office-1.jpg"
          alt="Maya's therapy office, a calm living-room-style space with a sofa, armchair, and bookshelf"
          className="rounded-2xl object-cover h-96 w-full"
        />
        <img
          src="/images/office-2.jpg"
          alt="A cozy corner of the office with tall windows and natural light"
          className="rounded-2xl object-cover h-96 w-full"
        />
      </section>

      <section className="bg-sage/15">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-xl text-ink mb-2">Location</p>
            <p className="text-stone">45 W 123rd St</p>
            <p className="text-stone">Santa Monica, CA 90401</p>
          </div>
          <div>
            <p className="font-serif text-xl text-ink mb-2">Sessions</p>
            <p className="text-stone">In-person &amp; hybrid sessions available</p>
          </div>
          <div>
            <p className="font-serif text-xl text-ink mb-2">Telehealth</p>
            <p className="text-stone">
              Every service is also available as a secure telehealth session
              for clients located anywhere in California.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-clay text-alabaster px-8 py-4 font-medium hover:bg-ink transition-colors"
        >
          Schedule a visit
        </Link>
      </section>
      <Footer />
    </main>
  );
}
