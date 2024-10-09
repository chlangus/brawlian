import { PlayerData } from "@/type/player";
import BrawlerContainer from "../../BrawlerContainer";

export default function PlayerBrawllerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  return (
    <div className="grid grid-cols-6 gap-x-2 bg-brawl-pale-blue rounded-lg">
      {playerData.brawlers.map((brawler) => (
        <BrawlerContainer key={brawler.id} brawler={brawler} />
      ))}
    </div>
  );
}
