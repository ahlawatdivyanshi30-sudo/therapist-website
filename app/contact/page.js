import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | Dr. Maya Reynolds, PsyD" };

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-serif text-5xl text-ink leading-tight mb-6">
            Get in <span className="italic text-clay">touch</span>.
          </h1>
          <p className="text-lg text-stone mb-10 max-w-md">
            Use this form to tell me more about what brings you to therapy.
            I'll respond within 24 hours to see if we're a good fit for your
            needs and goals.
          </p>

          <div className="space-y-1 text-stone border-t border-ink/10 pt-8">
            <p>45 W 123rd St</p>
            <p>Santa Monica, CA 90401</p>
            <p className="mt-4">hello@mayareynoldspsyd.com</p>
            <p>310.555.0148</p>
          </div>

          <p className="text-stone mt-8 text-sm">
            Serving Santa Monica, West LA, Culver City, and telehealth
            clients throughout California.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
