import { PlayerData } from "@/type/player";
import BrawlerContainer from "../../BrawlerContainer";
import { handleBrawlerClick } from "@/hooks/useBrawlerClick";

export default function PlayerBrawlerList({
  playerData,
}: {
  playerData: PlayerData;
}) {
  return (
    <div className="grid grid-cols-6 gap-x-2 bg-brawl-pale-blue rounded-lg">
      {playerData.brawlers
        .sort((a, b) => b.trophies - a.trophies)
        .map((brawler) => (
          //나중에 정렬 추가 트로피순, 레벨순, 최신순
          <button
            key={brawler.id}
            onClick={() => {
              handleBrawlerClick(brawler.id);
            }}
          >
            <BrawlerContainer brawler={brawler} />
          </button>
        ))}
    </div>
  );
}
