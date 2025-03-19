"use client"
import { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  toggleModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleModal = () => setModalOpen((prevState) => !prevState);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
