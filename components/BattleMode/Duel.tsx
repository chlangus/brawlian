import { BattleData } from "@/type/battle";
import BrawlerContainer from "../BrawlerContainer";
import { scrollToTop } from "@/utils/scrollToTop";
import { useSearchId } from "@/hooks/useSearchId";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";

export default function Duel({ battle }: { battle: BattleData }) {
  const { handleSearchIdButton } = useSearchId();
  const { playerData } = usePlayerInfoContext();
  return (
    <div className="h-full flex gap-4 justify-center items-center shrink-0">
      {battle.battle.players.map((player, idx) => (
        <>
          <button
            key={player.id}
            className={`
              ${
                playerData.tag.toLowerCase() == player.tag.toLowerCase()
                  ? "border-4 border-brawl-yellow"
                  : ""
              }
              ${
                !idx && "items-end"
              } flex flex-col gap-2 bg-black bg-opacity-50 rounded-t-lg `}
            onClick={() => {
              handleSearchIdButton(player.tag);
              scrollToTop();
            }}
          >
            <h2 className="px-2">{player.name}</h2>
            <div className="flex gap-2">
              {player.brawlers.map((brawler) => (
                <BrawlerContainer brawler={brawler} key={brawler.id} isBattle />
              ))}
            </div>
          </button>
          {idx === 0 && <p className="text-3xl drop-shadow-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
