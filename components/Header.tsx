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

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[var(--color-primary)] shadow-md z-50 md:flex md:static md:w-auto md:space-x-6 md:bg-transparent md:shadow-none md:flex-row md:items-center`}
        >
          {/* Enlaces del menú apilados en pantallas pequeñas */}
          <div className="flex flex-col items-center md:flex-row md:space-x-6 md:space-y-0 w-full md:w-auto">
            <Link
              href="#services"
              className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out px-6 py-2 w-full text-center md:text-left border-b md:border-none border-gray-300"
              style={{ boxShadow: "2px 0 0 rgba(0, 0, 0, 0.3)" }}
            >
              Servicios
            </Link>
            <Link
              href="#team"
              className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out px-6 py-2 w-full text-center md:text-left border-b md:border-none border-gray-300"
              style={{ boxShadow: "2px 0 0 rgba(0, 0, 0, 0.3)" }}
            >
              Equipo
            </Link>
            <Link
              href="#contact"
              className="text-lg hover:text-[var(--color-vital)] transition-all duration-300 ease-in-out px-6 py-2 w-full text-center md:text-left border-b md:border-none border-gray-300"
              style={{ boxShadow: "2px 0 0 rgba(0, 0, 0, 0.3)" }}
            >
              Contacto
            </Link>
          </div>
        </nav>

        <Link
          href="#contact"
          className="bg-[var(--color-accent)] text-white px-4 py-2 rounded shadow-md hover:bg-[var(--color-primary)] transition-all hidden sm:inline-block"
          style={{ boxShadow: "2px 0 0 rgba(0, 0, 0, 0.3)" }}
        >
          Reserva ahora
        </Link>
      </div>
    </header>
  );
};

export default Header;
