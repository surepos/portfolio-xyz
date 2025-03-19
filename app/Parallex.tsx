import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowSize } from 'hamo';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  id?: string;
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ children, speed = 1, id = 'parallax', className }) => {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (!trigger.current || !target.current) return;

    // Provide a default value (e.g., 1024) when windowWidth is undefined
    const y = (windowWidth || 1024) * speed * 0.1;

    const setY = gsap.quickSetter(target.current, 'y', 'px');

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline.current?.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
};

export default Parallax;
