"use client";

import Image from "next/image";

const team = [
  {
    name: "Dr. Juan Pérez",
    specialty: "Cardiólogo",
    experience: "10 años de experiencia",
    additionalSpecialty: "Especialista en insuficiencia cardíaca",
    photo: "/Team/cardiologia.jpg",
  },
  {
    name: "Dra. María Gómez",
    specialty: "Pediatra",
    experience: "8 años de experiencia",
    additionalSpecialty: "Atención especializada en niños ",
    photo: "/Team/pediatria.jpg",
  },
  {
    name: "Dr. Luis Ramírez",
    specialty: "Odontólogo",
    experience: "12 años de experiencia",
    additionalSpecialty: "Ortodoncia avanzada",
    photo: "/Team/odontologia.jpg",
  },
  {
    name: "Dra. Laura Sánchez",
    specialty: "Laboratorio Clínico",
    experience: "7 años de experiencia",
    additionalSpecialty: "Análisis de sangre y estudios recetados",
    photo: "/Team/laboratorio.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">
          Nuestro Equipo Médico
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  width={500} // Ajusta a las dimensiones necesarias
                  height={300} // Ajusta a las dimensiones necesarias
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-700">
                  {member.name}
                </h4>
                <p className="text-gray-600 font-medium mt-1">
                  {member.specialty}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {member.experience}
                </p>
                <p className="text-sm text-gray-500">
                  {member.additionalSpecialty}
                </p>
              </div>

              <button className="mt-6 w-full py-2 bg-[var(--color-accent)] text-white rounded-lg text-sm font-medium transition-transform transform hover:scale-105 hover:bg-[var(--color-primary)]">
                <a href="#contact">Contactar</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
