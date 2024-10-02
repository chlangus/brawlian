import { PlayerData } from "@/type/player";

export default function PlayerBrawllerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {playerData.brawlers.map((brawler) => (
        <div key={brawler.id} className="bg-brawl-pale-blue rounded-lg p-2">
          <p>{brawler.name}</p>
          <p>{brawler.trophies}</p>
          <p>{brawler.power}</p>
          <p>{brawler.rank}</p>
        </div>
      ))}
    </div>
  );
}
