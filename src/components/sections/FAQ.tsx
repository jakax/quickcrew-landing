"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { faqItems } from "@/content/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FBFEFE] py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Common questions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              QuickCrew connects hospitality businesses and workers through a
              faster, simpler staffing workflow.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqItems.slice(0, 3).map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 100}>
                <div className="rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-zinc-900">
                      {item.question}
                    </span>

                    <span
                      className={`text-2xl transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-zinc-600 leading-7">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/faq"
            className="text-sm font-semibold text-[#148A94] hover:underline"
          >
            View all FAQs →
          </a>
        </div>
      </Container>
    </section>
  );
}