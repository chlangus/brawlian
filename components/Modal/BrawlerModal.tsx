"use client";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function BrawlerModal() {
  const { modalState, setModalState, brawlerId } = useModal();
  const { brawlers } = useBrawlInfoContext();
  return (
    modalState && (
      <div className="fixed inset-0 z-20 flex justify-center items-center overflow-hidden">
        <div className="fixed inset-0 bg-black opacity-50" />
        <section className="fixed w-[600px] bg-brawl-pale-blue opacity-100 p-4 rounded-lg drop-shadow-2xl">
          <div className="flex justify-between mb-2">
            <h2 className="text-3xl">{brawlers[brawlerId].name}</h2>
            <button
              onClick={() => {
                setModalState(false);
                document.body.style.overflow = "unset";
              }}
              className="text-2xl"
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-start ">
              <Image
                src={brawlers[brawlerId].imageUrl}
                alt="image"
                width={120}
                height={120}
              />
              <div>
                <h3
                  className={`text-2xl text-[${brawlers[brawlerId].rarity.color}]`}
                >
                  {brawlers[brawlerId].rarity.name}
                </h3>
                <h3 className="text-2xl">{brawlers[brawlerId].class.name}</h3>
              </div>
            </div>

            <div className="border-brawl-yellow border-4 rounded-lg p-2">
              <h1 className="text-2xl">Gadget</h1>
              {brawlers[brawlerId].gadgets.map((gadget) => (
                <div key={gadget.id} className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={gadget.imageUrl}
                      alt="gadgetImage"
                      width={12}
                      height={12}
                      className="w-4 h-4"
                    />
                    <h2>{gadget.name}</h2>
                  </div>
                  <p>{gadget.description}</p>
                </div>
              ))}
            </div>

            <div className="border-brawl-yellow border-4 rounded-lg p-2">
              <h1 className="text-2xl">Star Power</h1>
              {brawlers[brawlerId].starPowers.map((starPower) => (
                <div key={starPower.id} className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={starPower.imageUrl}
                      alt="gadgetImage"
                      width={12}
                      height={12}
                      className="w-4 h-4"
                    />
                    <h2>{starPower.name}</h2>
                  </div>
                  <p>{starPower.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  );
}
