"use client";

import { useState } from "react";

const team = [
  {
    name: "Dr. Juan Pérez",
    specialty: "Cardiólogo",
    experience: "10 años de experiencia",
    additionalSpecialty: "Especialista en insuficiencia cardíaca",
    photo: "Team/cardiologia.jpg",
  },
  {
    name: "Dra. María Gómez",
    specialty: "Pediatra",
    experience: "8 años de experiencia",
    additionalSpecialty: "Atención a niños con enfermedades respiratorias",
    photo: "Team/pediatria.jpg",
  },
  {
    name: "Dr. Luis Ramírez",
    specialty: "Odontólogo",
    experience: "12 años de experiencia",
    additionalSpecialty: "Ortodoncia avanzada",
    photo: "Team/odontologia.jpg",
  },
  {
    name: "Dra. Laura Sánchez",
    specialty: "Laboratorio Clínico",
    experience: "7 años de experiencia",
    additionalSpecialty: "Análisis de sangre y pruebas moleculares",
    photo: "Team/laboratorio.jpg",
  },
];

export default function Team() {
  const [subject, setSubject] = useState("");

  const handleContact = (specialty: string) => {
    setSubject(specialty);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Nuestro Equipo Médico</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all transform hover:scale-102"
            >
              <img
                src={member.photo}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-gray-300"
              />
              <h4 className="text-xl font-semibold text-gray-700">{member.name}</h4>
              <p className="text-gray-600 font-medium mt-1">{member.specialty}</p>
              <p className="text-sm text-gray-500 mt-2">{member.experience}</p>
              <p className="text-sm text-gray-500">{member.additionalSpecialty}</p>
              <button
                onClick={() => handleContact(member.specialty)}
                className="mt-6 w-full py-2 bg-[var(--color-accent)] text-white rounded-lg text-sm font-medium transition-transform transform hover:scale-105 hover:bg-[var(--color-primary)]"
              >
                Contactar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




  