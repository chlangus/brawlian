import { PlayerData } from "@/type/player";
import BrawlerContainer from "../../BrawlerContainer";
import Link from "next/link";

export default function PlayerBrawlerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  return (
    <div className="grid grid-cols-6 gap-x-2 bg-brawl-pale-blue rounded-lg">
      {playerData.brawlers.map((brawler) => (
        <Link key={brawler.id} href={`/brawler/${brawler.id}`}>
          <BrawlerContainer brawler={brawler} />
        </Link>
      ))}
    </div>
  );
}
