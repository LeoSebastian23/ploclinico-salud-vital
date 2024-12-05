"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "", subject: "" });
  };

  return (
    <section id="contact" className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-lg">
        {/* Imagen o GIF */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 mx-8 md:mb-0">
          <Image
            src="/form.svg"
            alt="Imagen de contacto"
            width={500}  
            height={300} 
            className="rounded-lg"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Contáctanos
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-gray-700 font-medium"
              >
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-700 font-medium"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-left text-gray-700 font-medium"
              >
                Asunto
              </label>
              <select
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleSelectChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                required
              >
                <option value="">Selecciona una especialidad</option>
                <option value="Medicina General">Medicina General</option>
                <option value="Pediatría">Pediatría</option>
                <option value="Cardiología">Cardiología</option>
                <option value="Odontología">Odontología</option>
                <option value="Laboratorio Clínico">Laboratorio Clínico</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--color-accent)] text-white rounded-md hover:bg-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition transform hover:scale-105"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

