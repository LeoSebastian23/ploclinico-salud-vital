'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Section = ({ children, id }: { children: React.ReactNode, id: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Solo animar cuando entra en vista por primera vez
    threshold: 0.2, // El umbral de visibilidad (0.2 es el 20% de la sección visible)
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.section
      ref={ref}
      style={props}
      id={id}
      className="py-16 px-4 md:px-16 bg-white"
    >
      {children}
    </animated.section>
  );
};

export default Section;
