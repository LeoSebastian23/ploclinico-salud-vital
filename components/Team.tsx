const team = [
    { name: "Dr. Juan Pérez", specialty: "Cardiólogo", photo: "Team/cardiologia.jpg" },
    { name: "Dra. María Gómez", specialty: "Pediatra", photo: "Team/pediatria.jpg" },
    { name: "Dr. Luis Ramírez", specialty: "Odontólogo", photo: "Team/odontologia.jpg" },
  ];
  
  export default function Team() {
    return (
      <section id="team" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Nuestro Equipo Médico</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-6 rounded shadow-lg bg-white">
                <img
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-blue-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  