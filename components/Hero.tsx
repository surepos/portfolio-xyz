"use client"
import React, { useEffect } from 'react';
import Star from './ui/star';
import Projects from './Projects';
import Parallax from '@/app/Parallex';
import { motion } from 'framer-motion';

const Hero = () => {
  
  const randomizePosition = () => {
    const up = document.querySelector('.up');
    const down = document.querySelector('.down');
    const left = document.querySelector('.left');

    // Apply random increments to each element
    applyRandomMovement(up, 50, 50);    // Small random movements
    applyRandomMovement(down, 50, 50);  // You can adjust the range
    applyRandomMovement(left, 50, 50);  // depending on the desired effect
  };

  const applyRandomMovement = (element, rangeX, rangeY) => {
    if (element) {
      // Get the element's current position
      const currentX = parseInt(element.style.getPropertyValue('--random-x') || 0);
      const currentY = parseInt(element.style.getPropertyValue('--random-y') || 0);

      // Generate small random increments/decrements within a specified range
      const newX = currentX + Math.floor(Math.random() * rangeX - rangeX / 2);
      const newY = currentY + Math.floor(Math.random() * rangeY - rangeY / 2);

      // Set the new positions
      element.style.setProperty('--random-x', `${newX}px`);
      element.style.setProperty('--random-y', `${newY}px`);
    }
  };

  useEffect(() => {
    randomizePosition(); // Initial randomization
    const interval = setInterval(() => {
      randomizePosition(); // Keep randomizing every 2 seconds
    }, 2000); // Adjust interval for smoother movement

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array, no need for dependencies

  return (
    <section>
      <div id='aura-hero' className='aura-hero -z-1'>
        <div className="up"></div>
        <div className="down"></div>
        <div className="left"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Parallax speed={-1}>
          <div className='mt-35 lg:mt-60 mb-10 relative'>
            <Parallax speed={-1}>
              <div className='absolute -right-20 -top-0 md:top-20 scale-50 md:scale-100'>
                <Star />
              </div>
            </Parallax>

            <motion.div 
              className="title-size gradient-text acorn-title"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-transparent md:tracking-[2.3px] lg:tracking-[3.5px]">
                Hi. I&apos; m Sura.
              </h1>
              <h1 className="text-transparent tracking-[-2px] md:tracking-[-1.3px] lg:tracking-[-1.8px]">
                A Developer.
              </h1>
            </motion.div>
            <Parallax speed={1}>
              <div className='absolute -left-20 md:-left-32 md:bottom-5 -bottom-3 scale-50 md:scale-100'>
                <Star />
              </div>
            </Parallax>
          </div>
        </Parallax>

        <Parallax speed={-1}>
          <div className="px-[24px]">
            <motion.p
              className="body-size text-center hero-p tracking-[-.3px]"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              I&apos;m passionate about creating scalable, user-centric solutions
              with an <br className="hidden sm:inline" /> excellent user
              experience.
            </motion.p>
          </div>
        </Parallax>
      </div>
      <Projects />
    </section>
  );
};

export default Hero;
