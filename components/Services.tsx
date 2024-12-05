"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaStethoscope,
  FaChild,
  FaHeart,
  FaTooth,
  FaFlask,
} from "react-icons/fa";
const services = [
  {
    title: "Medicina General",
    description: "Consulta y atención médica integral.",
    icon: <FaStethoscope />,
  },
  {
    title: "Pediatría",
    description: "Cuidado especializado para los niños.",
    icon: <FaChild />,
  },
  {
    title: "Cardiología",
    description: "Tratamiento del corazón.",
    icon: <FaHeart />,
  },
  { title: "Odontología", description: "Cuidado dental.", icon: <FaTooth /> },
  {
    title: "Laboratorio Clínico",
    description: "Análisis clínicos confiables.",
    icon: <FaFlask />,
  },
];

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Mostrar una tarjeta a la vez
    slidesToScroll: 1, // Mover una tarjeta por vez
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024, // Pantallas grandes
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640, // Móviles
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Nuestros Servicios</h3>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border  rounded shadow hover:shadow-lg mx-2"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="text-5xl text-[var(--color-primary)] mr-2">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
