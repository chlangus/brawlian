"use client";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function Modal() {
  const { modalState, setModalState, brawlerId } = useModal();
  const { brawlers } = useBrawlInfoContext();
  return (
    modalState && (
      <div className="fixed inset-0 z-20 flex justify-center items-center">
        <div className="fixed inset-0 bg-black opacity-50 " />
        <section className="fixed w-[600px] flex bg-brawl-pale-blue opacity-100">
          <h2>brawler</h2>
          <button onClick={() => setModalState(false)}>X</button>
          <Image
            src={brawlers[brawlerId].imageUrl}
            alt="image"
            width={120}
            height={120}
          />
        </section>
      </div>
    )
  );
}
