import ParallaxSection from "@/components/ParallaxSection";

export default function Hero() {
  return (
    <ParallaxSection bgImage="Team/clinica.jpg">
      <section className="relative py-24 text-center text-white">
        <div className="absolute inset-0"></div> {/* Fondo oscuro para mejorar contraste */}
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400 drop-shadow-lg">
          Cuidando tu bienestar, siempre
        </h2>
        <p className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Tu salud es nuestra prioridad. Agenda tu consulta hoy mismo y comienza tu camino hacia una vida más saludable.
        </p>
        
        <button className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg shadow-xl hover:bg-[var(--color-primary)] transform hover:scale-105 transition-all duration-300">
          <a href="#contact">Agenda tu consulta</a>
        </button>
      </section>
    </ParallaxSection>
  );
}
