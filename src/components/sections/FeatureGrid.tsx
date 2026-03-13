import Container from "@/components/ui/Container";
import { features } from "@/content/features";

export default function FeatureGrid() {
  return (
    <section className="quickcrew-section-soft relative bg-white py-24">
      <Container className="relative z-10">
        <div className="max-w-2xl quickcrew-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            Benefits
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Built to reduce friction on both sides.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            QuickCrew should feel simple, operational, and trustworthy — not
            generic.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="quickcrew-card rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF9FB] text-sm font-semibold text-[#148A94]">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-semibold text-zinc-950">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}