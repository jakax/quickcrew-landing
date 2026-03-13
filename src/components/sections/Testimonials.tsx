import Container from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-2xl quickcrew-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Early credibility matters.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name + item.role}
              className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-white to-[#FBFEFE] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-6 text-4xl leading-none text-[#22B8C4]/30">
                “
              </div>

              <p className="text-lg leading-8 text-zinc-700">{item.quote}</p>

              <div className="mt-8">
                <p className="font-semibold text-zinc-950">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}