import { BattleData } from "@/type/battle";
import BrawlerContainer from "../BrawlerContainer";

export default function Duel({ battle }: { battle: BattleData }) {
  return (
    <div className="h-full flex gap-4 justify-center items-center shrink-0">
      {battle.battle.players.map((player, idx) => (
        <>
          <div
            key={player.id}
            className="flex flex-col gap-2 bg-black bg-opacity-50 rounded-t-lg"
          >
            <h2 className={`inline-block px-2 ${!idx && "text-right"}`}>{player.name}</h2>
            <div className="flex gap-2">
              {player.brawlers.map((brawler) => (
                <BrawlerContainer brawler={brawler} key={brawler.id} isBattle />
              ))}
            </div>
          </div>
          {idx === 0 && <p className="text-3xl drop-shadow-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
