"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage/30 border border-sage p-8">
        <p className="font-serif text-2xl text-ink mb-2">Thank you.</p>
        <p className="text-stone">
          This is a demo form (no backend is connected yet), but in the real
          site this is where I'd confirm your message was received and that
          I'll respond within 24 hours to match you with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <p className="text-sm text-ink mb-3 font-medium">Name</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-stone mb-2">First name (required)</label>
            <input required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
          </div>
          <div>
            <label className="block text-xs text-stone mb-2">Last name (required)</label>
            <input required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">Email (required)</label>
        <input type="email" required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">Phone (required)</label>
        <input type="tel" required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">
          Are you looking for telehealth or in-person therapy? (required)
        </label>
        <select required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white">
          <option value="">Select an option</option>
          <option>Telehealth</option>
          <option>In-person</option>
          <option>Either works</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">How did you hear about this practice? (required)</label>
        <select required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white">
          <option value="">Select an option</option>
          <option>Google search</option>
          <option>Psychology Today</option>
          <option>Referral from a friend or family member</option>
          <option>Referral from another provider</option>
          <option>Social media</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">
          Please provide the name of your insurance company (required)
        </label>
        <p className="text-xs text-stone/70 mb-2">If you do not plan to use insurance, please write &ldquo;None&rdquo;.</p>
        <input required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">What are the presenting issues? (required)</label>
        <p className="text-xs text-stone/70 mb-2">Note: please do not provide any sensitive personal information in this form.</p>
        <textarea rows={5} required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
      </div>

      <div>
        <label className="block text-xs text-stone mb-2">
          We see clients the same day and time each week. Please share days/times that generally work for you (required)
        </label>
        <input required className="w-full rounded-lg border border-ink/20 px-4 py-3 bg-white" />
      </div>

      <button
        type="submit"
        className="rounded-full bg-clay text-alabaster px-8 py-4 font-medium hover:bg-ink transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
