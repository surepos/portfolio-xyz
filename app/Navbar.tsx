"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavItem } from "@/constants";
import { useModal } from "@/lib/modalContext";


const Navbar = () => {
  const { toggleModal} = useModal();
//   console.log(isModalOpen)
  const active = usePathname();
  return (
    <div className="absolute w-full z-100 bottom-25">
      <motion.div
        className="w-full flex justify-between items-start fixed mt-0 md:mt-0 h-5"
        transition={{ duration: 0.4 }}
        suppressHydrationWarning
      >
        <div className="flex max-w-6xl items-center justify-center gap-2 navbar left-1/2 transform -translate-x-1/2 mt-5 z-50 py-[3px] px-[3px] rounded-[8px] backdrop-blur-lg">
          {NavItem.map((nav) => (
            <div
              key={nav.id}
              className={`px-[24px] py-[15px] text-lg rounded-[4px] ui-sans-semibold ${
                active === nav.link
                  ? "bg-[#101010] text-[#fff]"
                  : "text-white/[1]"
              }`}
            >
              <Link href={nav.link}>{nav.label}</Link>
            </div>
          ))}
          <div className="px-[15px] py-[15px] text-lg ui-sans-semibold rounded-[4px] cursor-pointer text-black/[1] bg-[#fff]/[1]" onClick={() => toggleModal()}>
            Contact
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;