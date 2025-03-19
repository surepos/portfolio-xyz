"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { UseDimension } from "@/components/ui/useDimension";
import { motion } from "framer-motion";
import MenuItems from "@/components/MenuItems";
import { usePathname } from "next/navigation";
import { NavItem } from "@/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 250px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = UseDimension(containerRef);
  const active = usePathname();


  return (
    <div className="absolute md:mb-0 w-full z-40 ">
      <motion.div
        className="w-full flex justify-between items-start fixed mt-0 md:mt-0 h-5"
        transition={{ duration: 0.4 }}
        suppressHydrationWarning
      >
        <div className="logo-image">
          {/* <Image src={icons.day} alt={"logo"} className='w-[40px] h-[40px]'/> */}
        </div>
        <div
          className="md:hidden fixed right-[37px] top-[40px] z-50"
          id="menuToggle"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              stroke="#FFFFFF"
              initial={{ d: "M 2 2.5 L 20 2.5" }}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              stroke="#FFFFFF"
              initial={{ d: "M 2 9.423 L 15 9.423", opacity: 1 }}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 9.423 L 15 9.423", opacity: 1 },
                open: { d: "M 2 9.423 L 15 9.423", opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              stroke="#FFFFFF"
              initial={{ d: "M 2 16.346 L 20 16.346" }}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </div>
        <div className="h-[100vh] w-[300px] relative">
          <motion.div
            style={{ pointerEvents: isOpen ? "" : "none" }}
            className="absolute h-full bottom-0 left-0 w-full"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="md:hidden absolute w-full h-full bg-[#323232]/[1] -z-50 backdrop-blur-md top-0 right-0"
              variants={sidebar}
            />
            <motion.div
              variants={variants}
              className="flex flex-col justify-center items-start gap-10 px-15 py-30"
            >
              {NavItem.map((item) => (
                <MenuItems
                  key={item.id}
                  name={item.label}
                  active={active}
                  link={item.link}
                  setIsOpen={setIsOpen}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex max-w-6xl items-center justify-center gap-20 navbar left-1/2 transform -translate-x-1/2 mt-5 z-50 py-[4px] px-[4px] rounded-[12px] backdrop-blur-lg">
          {NavItem.map((nav) => (
            <div
              key={nav.id}
              className={`px-[12px] py-[12px] text-lg rounded-[8px] ${
                active === nav.link
                  ? "bg-[#101010] text-[#fff]"
                  : "text-white/[0.5]"
              }`}
            >
              <Link href={nav.link}>{nav.label}</Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;