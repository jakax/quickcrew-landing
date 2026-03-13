import Container from "@/components/ui/Container";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    title: "Browse available shifts",
    description:
      "Workers can quickly explore available opportunities with clear details on role, location, and pay.",
    image: "/images/hero/job-list.png",
  },
  {
    title: "Understand shift details",
    description:
      "QuickCrew presents shift information in a clean, readable format that helps users make faster decisions.",
    image: "/images/hero/job-details.png",
  },
  {
    title: "Save opportunities",
    description:
      "Workers can keep track of shifts they are interested in and return to them later.",
    image: "/images/hero/save.png",
  },
];

export default function ProductPreview() {
  return (
    <section className="quickcrew-section-soft relative bg-[#F7FEFF] py-20 sm:py-24 lg:py-28">
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              Product preview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Designed for faster staffing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              QuickCrew simplifies the staffing process for both businesses and
              workers through a mobile-first experience built around speed and
              clarity.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 120}>
              <article className="quickcrew-card rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_rgba(34,184,196,0.08)] backdrop-blur">
                <div className="relative mx-auto mb-6 w-[180px] sm:w-[200px]">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-[140px] w-[140px] rounded-full bg-[#22B8C4]/16 blur-[70px]" />
                  </div>

                  <div className="relative rounded-[1.6rem] border border-white/70 bg-white/85 p-2 shadow-[0_16px_45px_rgba(34,184,196,0.12)] backdrop-blur-xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={1600}
                      className="h-auto w-full rounded-[1.3rem]"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 text-center">
                  {feature.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-zinc-600 text-center">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}