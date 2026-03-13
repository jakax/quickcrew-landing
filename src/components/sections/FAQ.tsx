import Container from "@/components/ui/Container";
import { faqItems } from "@/content/faq";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FBFEFE] py-24">
      <Container>
        <div className="max-w-2xl quickcrew-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Common questions.
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {item.question}
              </h3>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}