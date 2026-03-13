import Container from "@/components/ui/Container";

export default function FounderStory() {
  return (
    <section className="bg-[#F7FEFF] py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#22B8C4]/12 bg-white p-8 shadow-[0_18px_50px_rgba(34,184,196,0.06)] md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#148A94]">
            Built from real hospitality experience
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            A product shaped by real operational friction.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            QuickCrew comes from understanding the real pressure hospitality
            teams face when shifts need to be filled fast, and the real need
            workers have for flexibility and access to opportunities.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            This section keeps the human side of the brand while presenting it
            with more clarity, confidence, and product maturity.
          </p>
        </div>
      </Container>
    </section>
  );
}