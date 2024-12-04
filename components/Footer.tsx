'use client';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sección de Contacto */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">Contacto</h4>
          <p className="text-lg">Av. Principal 123, Ciudad, País</p>
          <p className="text-lg">Teléfono: +1 234 567 890</p>
          <p className="text-lg">Email: contacto@saludvital.com</p>
          <p className="text-lg">Horario: Lunes a Viernes 8:00 AM - 6:00 PM</p>
        </div>

        {/* Navegación Rápida */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">Navegación</h4>
          <ul className="space-y-3">
            <li>
              <a href="#services" className="hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out text-lg">
                Servicios
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out text-lg">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out text-lg">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">Síguenos</h4>
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-200 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-green-600 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-gray-200 mt-6 pt-6 text-center text-lg">
        <p>&copy; 2024 Policlínico Salud Vital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

