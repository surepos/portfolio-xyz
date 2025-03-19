"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // Corrected import
import React, { ReactNode, useEffect, useRef } from "react";
import { useModal } from "@/lib/modalContext";
import Image from "next/image";
import { icons } from "@/constants";

export function Modal({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const modalRef = useRef<HTMLDivElement>(null); 

  useOutsideClick(modalRef, () => closeModal());

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-150"
        >
          <motion.div
            ref={modalRef} // Ref is now correctly typed
            className={cn(
              "sm:h-[600px] h-[100%] sm:w-[350px] bot-bg border md:rounded-2xl z-500 flex flex-col flex-1 overflow-hidden absolute bottom-0 right-0 sm:bottom-10 sm:right-10 backdrop-blur-md",
              className
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            <div className="flex justify-between items-center py-2 px-5 bot-header">
              <div className="flex gap-5 items-center justify-center">
                <div className="w-10 h-10 bot-icon rounded-full overflow-clip">
                  <Image src={icons.sura} alt="sura" />
                </div>
                <div>
                  <h2 className="text-md font-bold text-gray-900 dark:text-white ui-sans-semibold">
                    Sura Bot
                  </h2>
                  <p className="text-sm font-ui-sans-bold ui-sans-light">
                    Ask Me a question
                  </p>
                </div>
              </div>
              <CloseIcon />
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

const CloseIcon = () => {
  const { closeModal } = useModal();
  return (
    <button
      onClick={() => closeModal()}
      className="group p-1.5 rounded-md hover:bg-white/[0.1] "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black dark:text-white h-5 w-5 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to detect clicks outside of a component.
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>, // Allow null type for ref
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
