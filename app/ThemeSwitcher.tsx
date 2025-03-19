import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  const isDayTime = currentHour >= 6 && currentHour < 18;

  useEffect(() => {
    setTheme(isDayTime ? "light" : "dark");
  }, [isDayTime, setTheme]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setCurrentHour(index);
    setTheme(index >= 6 && index < 18 ? "light" : "dark");
  };

  return (
    <div className="container w-full mx-auto">
      {Array.from({ length: 24 }).map((_, index) => {
        let className = 'line-wrapper';
        className += index >= 6 && index < 18 ? ' dayTime' : ' nightTime';
        className += index === currentHour ? ' currentHour' : '';
        className += hoveredIndex === index ? ' hovered' : '';
        className += (
          (hoveredIndex === index - 1 || hoveredIndex === index + 1) &&
          index - 1 !== currentHour &&
          index + 1 !== currentHour
        ) ? ' adjacent' : '';

        return (
          <div
            key={index}
            className={className}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            role="button"
            aria-label={`Set time to ${index}:00`}
          >
            <div className="line" />
            {index === currentHour && (
              <motion.div
                className={`absolute ${isDayTime ? 'bg-[#000]/[0.7]' : 'bg-[#2573DD]/[0.5]'} rounded-[7px] -top-20 p-2 w-[40px] h-[40px]`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                {isDayTime ? <Sun color={'#fff'} className="w-full h-full" /> : <Moon className="w-full h-full" />}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
