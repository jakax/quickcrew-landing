import Container from "@/components/ui/Container";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const founders = [
  {
    name: "Barbara Hillcoat",
    role: "Co-founder",
    image: "/images/hero/barbi.png",
    description:
      "Barbara brings a strong people-first perspective and a deep understanding of the human side of hospitality. Her focus has always been on helping teams work better together and creating opportunities for people in the local community.",
  },
  {
    name: "Sandra Salandri",
    role: "Co-founder",
    image: "/images/hero/sandruski.png",
    description:
      "Sandra brings operational structure and practical thinking to the project. She focuses on building systems that make everyday processes simpler and more efficient for hospitality teams.",
  },
];

export default function HumanStory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              Built in Queenstown
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              People behind QuickCrew.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              QuickCrew was created in Queenstown with a simple goal: make it easier for hospitality businesses to find reliable casual staff, and for workers to discover flexible opportunities.
              Behind the platform are two founders who understand the local hospitality environment and wanted to build something genuinely useful for the community.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 120}>
              <article className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-[#FBFEFE] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_10px_25px_rgba(34,184,196,0.08)]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#148A94]">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-base leading-8 text-zinc-600">
                  {founder.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-[2rem] border border-[#22B8C4]/12 bg-[linear-gradient(180deg,#F7FEFF_0%,#FFFFFF_100%)] p-8 text-center shadow-[0_12px_30px_rgba(34,184,196,0.05)]">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-700">
              QuickCrew is being built with the belief that staffing should feel simpler, 
              faster, and more human — especially in a place like Queenstown 
              where relationships and trust matter.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}