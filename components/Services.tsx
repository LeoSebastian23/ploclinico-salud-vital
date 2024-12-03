const services = [
  {
    title: "Medicina General",
    description: "Consulta y atención médica integral.",
    icon: "🩺",
  },
  {
    title: "Pediatría",
    description: "Cuidado especializado para los niños.",
    icon: "👶",
  },
  { title: "Cardiología", description: "Tratamiento del corazón.", icon: "❤️" },
  { title: "Odontología", description: "Cuidado dental.", icon: "🦷" },
  {
    title: "Laboratorio Clínico",
    description: "Análisis clínicos confiables.",
    icon: "🔬",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Nuestros Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded shadow hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
