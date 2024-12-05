'use client';

import { useEffect, useState } from 'react';

const ParallaxSection = ({ children, bgImage }: { children: React.ReactNode, bgImage: string }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cálculo de la posición del fondo con base en el desplazamiento del scroll
  const backgroundPosition = `${scrollPosition * 0.2}px`;

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `center ${backgroundPosition}`,
        backgroundAttachment: 'fixed', // No es compatible con algunos dispositivos móviles
        backgroundSize: 'cover',
      }}
      className="h-[50vh] md:h-[500px] bg-no-repeat flex items-center justify-center text-white"
    >
      <div className="text-center p-6 rounded-lg">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;

