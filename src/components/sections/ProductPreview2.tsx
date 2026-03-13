import Container from "@/components/ui/Container";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const supportCards = [
  {
    number: "01",
    title: "Clear shift details",
    description:
      "QuickCrew helps users understand the role, timing, location, and pay more clearly.",
  },
  {
    number: "02",
    title: "Faster decisions",
    description:
      "A simpler product flow reduces friction between discovering, reviewing, and taking action.",
  },
  {
    number: "03",
    title: "Built for mobile",
    description:
      "Every interaction is designed to feel quick, readable, and easy to use from a phone.",
  },
];

const bottomHighlights = [
  "Clearer shift information",
  "Cleaner workflow",
  "Hospitality-focused experience",
];

export default function ProductPreview2() {
  return (
    <section className="quickcrew-section-soft relative bg-[#F7FEFF] py-20 sm:py-24 lg:py-28">
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              Product preview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              A faster way to manage casual staffing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              QuickCrew brings together a cleaner workflow, clearer information,
              and a mobile-first experience built for real staffing pressure.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-5">
            {supportCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 120}>
                <article className="quickcrew-card rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_rgba(34,184,196,0.08)] backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#EAF9FB] text-sm font-semibold text-[#148A94]">
                      {card.number}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-zinc-950">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-zinc-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="relative mx-auto h-[420px] w-full max-w-[360px] sm:h-[520px] sm:max-w-[430px] lg:h-[560px] lg:max-w-[520px]">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[260px] w-[260px] rounded-full bg-[#22B8C4]/16 blur-[100px] sm:h-[320px] sm:w-[320px]" />
              </div>

              <div className="absolute right-0 top-0 z-20 w-[220px] sm:w-[270px] lg:w-[320px]">
                <div className="quickcrew-card rounded-[2rem] border border-white/70 bg-white/85 p-3 shadow-[0_24px_70px_rgba(34,184,196,0.14)] backdrop-blur-xl">
                  <Image
                    src="/images/hero/job-details.png"
                    alt="QuickCrew job details screen"
                    width={1200}
                    height={2400}
                    className="h-auto w-full rounded-[1.5rem]"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-10 w-[170px] sm:w-[210px] lg:w-[240px]">
                <div className="quickcrew-card rounded-[2rem] border border-white/65 bg-white/80 p-3 shadow-[0_18px_55px_rgba(34,184,196,0.10)] backdrop-blur-xl">
                  <Image
                    src="/images/hero/save.png"
                    alt="QuickCrew saved jobs screen"
                    width={1000}
                    height={2000}
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-16 sm:mt-20 grid gap-4 sm:grid-cols-3">
            {bottomHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/60 bg-white/75 px-5 py-4 text-center shadow-[0_10px_30px_rgba(34,184,196,0.06)] backdrop-blur"
              >
                <p className="text-sm font-medium text-[#148A94]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}