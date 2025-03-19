import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Timeline } from '@/components/ui/Timeline';
import { ClimaCast, FluenzY, icons, ListLoom, RC, StopWatch, ThermoSwitch, TicTacToe } from '@/constants';
import { AnimatedTooltip } from './ui/AnimatedTool';
import { WobbleCard } from './ui/WobbleCard';
import Parallax from '@/app/Parallex';

export function TimelineDemo() {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  const data = [
    {
      title: 'Present',
      content: (
        <div>
          {/* <Parallax speed={0}>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This is the year I did my first internship and, I develop 4 react web apps and this is 2 of them
          </p>
          </Parallax> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-5 w-full">
            <Parallax
              className={'col-span-1 lg:col-span-3 w-full h-full'}
              speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10 lg:pr-0 lg:pl-20">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={RC} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1 pl-4 lg:px-10">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold project-text-one body-font">
                    Autonomous
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                     Robot
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.RcCar}
                  alt="Projects"
                  className="rounded-t-xl lg:rounded-tr-none  md:rounded-t-xl h-[250px] md:h-auto"
                />
              </WobbleCard>
            </Parallax>

            <Parallax className="col-span-2 w-full h-full" speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={FluenzY} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1">
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-one body-font">
                      Fluenz
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                     iOS
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.Fluenz}
                  alt="Projects"
                  className="rounded-t-xl md:rounded-t-xl w-full"
                />
              </WobbleCard>
            </Parallax>
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          {/* <Parallax speed={0}>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This is the year I did my first internship and, I develop 4 react web apps and this is 2 of them
          </p>
          </Parallax> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-5 w-full">
            <Parallax
              className={'col-span-1 lg:col-span-3 w-full h-full'}
              speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10 lg:pr-0 lg:pl-20">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={TicTacToe} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1 pl-4 lg:px-10">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold project-text-one body-font">
                      TicTacToe
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                      Game
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.tictactoe}
                  alt="Projects"
                  className="rounded-t-xl lg:rounded-tr-none  md:rounded-t-xl h-[250px] md:h-auto"
                />
              </WobbleCard>
            </Parallax>

            <Parallax className="col-span-2 w-full h-full" speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={ListLoom} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1">
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-one body-font">
                      ListLoom
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                      Utility
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.listLoom}
                  alt="Projects"
                  className="rounded-t-xl md:rounded-t-xl w-full"
                />
              </WobbleCard>
            </Parallax>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          {/* <Parallax speed={0}>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            This was the year I embarked on my first internship, where I honed my skills in web development and built 4 React-based web applications. These projects not only strengthened my technical expertise but also allowed me to deliver impactful solutions. 
          </p>
          <div className="mb-8">
             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
               ✅ ClimaCast
            </div>
             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
               ✅ StopWatch
            </div>
             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
             ✅ ThermoSwitch
         </div>

         </div>
          </Parallax> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-5 lg:gap-y-5 w-full">
          <Parallax className='col-span-1 lg:col-span-5' speed={0}>
          <WobbleCard
          containerClassName="h-[350px] sm:h-[400px]"
          className="px-4 sm:px-10 lg:pr-0 lg:pl-20">
          <div className="flex items-center mb-5">
            <div className="flex flex-row items-center justify-start w-full">
              <AnimatedTooltip items={ClimaCast} />
            </div>
            <div className="flex flex-col items-end gap-y-1 pl-4 lg:px-10">
              <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-one body-font">
                ClimaCast
              </h2>
              <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                Data
              </h2>
            </div>
          </div>

          <Image
            src={isMobile ? icons.weatherMobile : icons.weather}
            alt="Projects"
            className="rounded-t-xl lg:rounded-tr-none lg:rounded-tl-xl h-[330px] md:h-auto"
          />
        </WobbleCard>
        </Parallax>
          <Parallax className="col-span-2 w-full h-full" speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={StopWatch} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1">
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-one body-font">
                      StopWatch
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                      Utility
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.stopWatch}
                  alt="Projects"
                  className="rounded-t-xl md:rounded-t-xl w-full"
                />
              </WobbleCard>
            </Parallax>
            <Parallax
              className={'col-span-1 lg:col-span-3 w-full h-full'}
              speed={0}>
              <WobbleCard
                containerClassName="h-[300px] sm:h-[400px]"
                className="px-4 sm:px-10 lg:pr-0 lg:pl-20">
                <div className="flex items-center mb-5">
                  <div className="flex flex-row items-center justify-start w-full">
                    <AnimatedTooltip items={ThermoSwitch} />
                  </div>
                  <div className="flex flex-col items-end gap-y-1 pl-4 lg:px-10">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold project-text-one body-font">
                      ThermoSwitch
                    </h2>
                    <h2 className="text-xl  md:text-xl lg:text-2xl font-bold project-text-two acorn-title">
                      Conversion
                    </h2>
                  </div>
                </div>

                <Image
                  src={icons.tempWatch}
                  alt="Projects"
                  className="rounded-t-xl lg:rounded-tr-none  md:rounded-t-xl h-[250px] md:h-auto"
                />
              </WobbleCard>
            </Parallax>

            
          </div>
        </div>
      ),
    },
    // {
    //   title: 'Changelog',
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full mx-auto">
      <Timeline data={data} />
    </div>
  );
}
