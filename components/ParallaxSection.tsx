'use client';

import { useEffect, useState } from 'react';

const ParallaxSection = ({ children, bgImage }: { children: React.ReactNode, bgImage: string }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Cálculo de la posición del fondo con base en el desplazamiento del scroll
  const backgroundPosition = `${scrollPosition * 0.2}px`;

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `center ${backgroundPosition}`,
        backgroundAttachment: isMobile ? 'scroll' : 'fixed', // Usar 'scroll' en móviles
        backgroundSize: 'cover', // Asegura que la imagen de fondo cubra toda la sección
        backgroundColor: 'transparent', // Evita el fondo negro
        position: 'relative', // Para evitar cualquier desajuste con el contenido
        zIndex: 0, // Asegura que el fondo esté debajo del contenido
      }}
      className="h-[50vh] md:h-[500px] bg-no-repeat flex items-center justify-center text-white"
    >
      <div className="text-center p-6 rounded-lg relative z-10">
        {children}
      </div>

      {/* Nueva capa con fondo fijo simulando parallax sin black-out en la parte inferior */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center z-0"
           style={{
             backgroundImage: `url(${bgImage})`,
             backgroundPosition: `center ${scrollPosition * 0.3}px`, // Ajuste de desplazamiento para el efecto parallax
             backgroundAttachment: 'fixed', // Mantener fondo fijo
           }} />
    </section>
  );
};

export default ParallaxSection;




