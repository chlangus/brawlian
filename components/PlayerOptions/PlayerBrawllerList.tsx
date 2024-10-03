import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { PlayerData } from "@/type/player";
import Image from "next/image";

export default function PlayerBrawllerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  const { brawlers } = useBrawlInfoContext();
  return (
    <div className="grid grid-cols-4 gap-2">
      {playerData.brawlers.map((brawler) => (
        <div key={brawler.id} className="bg-brawl-pale-blue rounded-lg p-2">
          <Image src={brawlers[brawler.id].imageUrl} alt="brawler-icon" width={65} height={65} />
          <p>{brawler.name}</p>
          <p>{brawler.trophies}</p>
          <p>{brawler.power}</p>
          <p>{brawler.rank}</p>
        </div>
      ))}
    </div>
  );
}
