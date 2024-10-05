import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { PlayerData } from "@/type/player";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";

export default function PlayerBrawllerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  const { brawlers } = useBrawlInfoContext();
  return (
    <div className="grid grid-cols-6 gap-x-2 bg-brawl-pale-blue">
      {playerData.brawlers.map((brawler) => (
        <div key={brawler.id} className="relative p-2">
          <p>{brawler.name}</p>
          <div className="relative">
            <Image
              src={brawlers[brawler.id]?.imageUrl || brawlers.imageUrl}
              alt="brawler-icon"
              width={120}
              height={120}
            />
            <p className="flex gap-1 absolute top-0 bg-black px-1 ">
              <Image src={trophySvg} alt="trophy-icon" />
              {brawler.trophies}
            </p>
            <p className="inline-block absolute leading-5 right-0 bottom-1 px-2 bg-black">
              Lv {brawler.power}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
