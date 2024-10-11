"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const modalContext = createContext<{
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  brawlerId: number;
  setBrawlerId: Dispatch<SetStateAction<number>>;
}>({
  modalState: false,
  setModalState: () => {},
  brawlerId: 0,
  setBrawlerId: () => {},
});

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [brawlerId, setBrawlerId] = useState<number>(0);
  return (
    <modalContext.Provider
      value={{ modalState, setModalState, brawlerId, setBrawlerId }}
    >
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);
