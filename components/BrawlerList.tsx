"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function BrawlerList() {
  const { brawlers } = useBrawlInfoContext();
  const { setModalState, setBrawlerId } = useModal();

  return (
    <section className="relative m-auto mt-[10vh] w-[850px] bg-brawl-more-pale-blue grid grid-cols-6 pt-4 p-2 rounded-lg gap-y-2">
      <h2 className="absolute -top-6 left-4 text-3xl font-bold">브롤러</h2>
      {Object.values(brawlers)
        .sort((a, b) => b.id - a.id)
        .map((brawler, idx) => (
          <button
            onClick={() => {
              setModalState(true);
              setBrawlerId(brawler.id);
            }}
            key={idx}
            className="m-auto bg-brawl-pale-blue rounded-lg px-4 pb-2"
          >
            <p>{brawler?.name}</p>
            <Image
              src={brawler?.imageUrl}
              alt="image"
              width={100}
              height={100}
            />
          </button>
        ))}
    </section>
  );
}
