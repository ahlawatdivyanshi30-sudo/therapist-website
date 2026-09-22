"use client";
import { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl text-ink">{f.q}</span>
              <span className="text-2xl text-clay shrink-0">{isOpen ? "\u2212" : "+"}</span>
            </button>
            {isOpen && (
              <p className="pb-6 text-stone text-lg leading-relaxed max-w-3xl">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
