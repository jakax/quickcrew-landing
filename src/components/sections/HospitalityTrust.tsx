import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const categories = ["Restaurants", "Cafés", "Bars", "Hotels", "Events"];

export default function HospitalityTrust() {
  return (
    <section className="relative border-y border-[#22B8C4]/10 bg-white">
      <Container className="py-10 sm:py-12">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
              Built for Queenstown hospitality
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Built around the realities of hospitality staffing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              QuickCrew is being built for hospitality businesses and workers in
              Queenstown, with early onboarding focused on the realities of
              local staffing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {categories.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#22B8C4]/15 bg-[#F7FEFF] px-4 py-2 text-sm font-medium text-[#148A94]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}