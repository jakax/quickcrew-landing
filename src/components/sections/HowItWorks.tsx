import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Post a shift",
    description:
      "Create staffing requests quickly through a simple workflow designed for busy hospitality teams.",
  },
  {
    number: "02",
    title: "Receive applications",
    description:
      "Workers can browse opportunities and apply in just a few taps from their phone.",
  },
  {
    number: "03",
    title: "Fill roles faster",
    description:
      "Review applications, confirm the right person, and keep operations moving with less friction.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="quickcrew-section-soft relative bg-white py-20 sm:py-24"
    >
      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              A simpler workflow for casual staffing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              QuickCrew helps businesses and workers move through the staffing
              process faster with a mobile-first experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-14">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <article className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <span className="inline-flex rounded-full bg-[#EAF9FB] px-3 py-1 text-sm font-semibold text-[#148A94]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-600">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}