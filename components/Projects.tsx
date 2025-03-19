'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { icons, Skills } from '@/constants';
import { TimelineDemo } from '@/components/TimeLineDemo';
import ProgressBar from '@/components/ui/ProgressBar';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';
import Parallax from '@/app/Parallex';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Page = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [progressValues, setProgressValues] = useState({ progress1: 0, progress2: 0 });
  const targetValues = { progress1: 95, progress2: 83 };

  useEffect(() => {
    setMounted(true);
  }, []);

  const startProgressAnimation = () => {
    const intervals = Object.keys(targetValues).map((key) => {
      return setInterval(() => {
        setProgressValues((prev) => {
          const newValue = prev[key] + 1;
          if (newValue >= targetValues[key]) {
            clearInterval(intervals[Object.keys(targetValues).indexOf(key)]);
          }
          return { ...prev, [key]: newValue };
        });
      }, 10);
    });

    return () => intervals.forEach(clearInterval);
  };

  if (!mounted) {
    return null;
  }

  return (
    <section>
      <div id="aura-hero" className="aura-hero -z-1">
        <div className="up"></div>
        <div className="down"></div>
        <div className="left"></div>
      </div>
      <Parallax speed={-1}>
        <motion.div 
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:grid-rows-2 max-w-7xl mx-auto w-full h-auto pt-15 md:pt-30 px-10"
        >
          <div className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-2 about-grid aspect-square mx-auto sm:w-full sm:aspect-auto sm:h-auto">
            <Image src={icons.sura} alt="MyProfile" />
          </div>
          <div className="col-span-2 about-grid aspect-video sm:aspect-auto flex items-center justify-center">
            <div className="w-[80%] mx-auto flex flex-col gap-0 sm:gap-3">
              {Skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-1 sm:gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <skill.img />
                  </div>
                  <div className="flex-1">
                    <ProgressBar
                      completed={skill.rate}
                      bgColor="rgba(255, 255, 255, 0.8)"
                      baseBgColor="#0a0a0a"
                      isLabelVisible={false}
                      barContainerClassName="bg-[#0a0a0a] rounded-[2px] sm:rounded-[4px]"
                      animateOnRender={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <InView triggerOnce onChange={(inView) => inView && startProgressAnimation()}>
            {({ ref }) => (
              <div ref={ref} className="col-span-1 about-grid aspect-square p-8">
                <CircularProgressbarWithChildren
                  value={progressValues.progress1}
                  strokeWidth={9}
                  styles={buildStyles({
                    pathColor: theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)',
                    textColor: '#ffffff',
                    trailColor: theme == 'light' ? '#CFE2F9' : 'rgba(0, 0, 0, 1)',
                    strokeLinecap: 'round',
                  })}
                >
                  <div className="text-center text-sm sm:text-md md:text-xl acorn-title">
                    <p className="font-bold text-white">{progressValues.progress1}%</p>
                    <p className="font-bold text-white">Frontend</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            )}
          </InView>
          <InView triggerOnce onChange={(inView) => inView && startProgressAnimation()}>
            {({ ref }) => (
              <div ref={ref} className="col-span-1 about-grid aspect-square p-8">
                <CircularProgressbarWithChildren
                  value={progressValues.progress2}
                  strokeWidth={9}
                  styles={buildStyles({
                    pathColor: theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)',
                    textColor: '#ffffff',
                    trailColor: theme == 'light' ? '#CFE2F9' : 'rgba(0, 0, 0, 1)',
                    strokeLinecap: 'round',
                  })}
                >
                  <div className="text-center text-sm sm:text-md md:text-xl acorn-title">
                    <p className="font-bold text-white">{progressValues.progress2}%</p>
                    <p className="font-bold acorn-title text-white">Backend</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            )}
          </InView>
        </motion.div>
      </Parallax>
      <TimelineDemo />
      <Footer />
    </section>
  );
};

export default Page;