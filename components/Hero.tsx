import ParallaxSection from "@/components/ParallaxSection";

export default function Hero() {
  return (
    <ParallaxSection bgImage="Team/clinica2.jpg">
      <section className=" bg-neutral-300/ py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal-500">
          Cuidando tu bienestar, siempre
        </h2>
        <p className="text-lg mb-6">
          Tu salud es nuestra prioridad. Agenda tu consulta hoy mismo.
        </p>
        <button className="bg-[var(--color-accent)] text-white px-6 py-2 rounded hover:bg-[var(--color-primary)] transition-all">
          Agenda tu consulta
        </button>
      </section>
    </ParallaxSection>
  );
}
