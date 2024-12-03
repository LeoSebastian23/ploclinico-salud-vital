// components/ParallaxSection.tsx
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

  const backgroundPosition = `${scrollPosition * 0.2}px`;

  return (
    <section
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: `center ${backgroundPosition}`, backgroundAttachment: 'fixed' }}
      className="h-[500px] bg-cover bg-no-repeat flex items-center justify-center text-white"
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
