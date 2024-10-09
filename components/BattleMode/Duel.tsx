import { BattleData } from "@/type/battle";
import BrawlerContainer from "../PlayerTabs/Brawlers/BrawlerContainer";

export default function Duel({ battle }: { battle: BattleData }) {
  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.players.map((player, idx) => (
        <>
          <div key={player.id}>
            <h2 className={`${!idx && "text-right"} `}>{player.name}</h2>
            <div className="flex gap-2">
              {player.brawlers.map((brawler) => (
                <BrawlerContainer brawler={brawler} key={brawler.id} />
              ))}
            </div>
          </div>
          {idx === 0 && <p className="text-3xl drop-shadow-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
