// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--color-primary)] text-white py-2 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-3xl font-bold">
          <Link
            href="/"
            className="hover:text-[var(--color-vital)] transition-colors"
          >
            Salud Vital
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {/* Ícono de hamburguesa */}
          <span className="text-2xl">☰</span>
        </button>

        <nav className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <Link
            href="#services"
            className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out pr-6"
            style={{ boxShadow: '2px 0 0 rgba(0, 0, 0, 0.3)' }}
          >
            Servicios
          </Link>
          <Link
            href="#team"
            className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out pr-6"
            style={{ boxShadow: '2px 0 0 rgba(0, 0, 0, 0.3)' }}
          >
            Equipo
          </Link>
          <Link
            href="#contact"
            className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out pr-6"
            style={{ boxShadow: '2px 0 0 rgba(0, 0, 0, 0.3)' }}
          >
            Contacto
          </Link>
        </nav>

        <Link
          href="#contact"
          className="bg-[var(--color-accent)] text-white px-4 py-2 rounded shadow-md hover:bg-[var(--color-primary)] transition-all hidden sm:inline-block"
          style={{ boxShadow: '2px 0 0 rgba(0, 0, 0, 0.3)' }}
        >
          Reserva ahora
        </Link>
      </div>
    </header>
  );
};

export default Header;
