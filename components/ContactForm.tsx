"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${formData.name}!`);
    // Aquí podrías enviar los datos a un backend o servicio como Formspree
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Contáctanos</h3>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-50 p-6 rounded shadow md:max-w-lg lg:max-w-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-semibold">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button className="bg-[var(--color-accent)] text-white px-6 py-2 rounded hover:bg-[var(--color-primary)] hover:scale-105 transition-transform">
  Enviar
</button>

        </form>
      </div>
    </section>
  );
}
