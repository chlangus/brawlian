import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { BattleData } from "@/type/battle";
import Image from "next/image";

export default function Duel({ battle }: { battle: BattleData }) {
  const { brawlers } = useBrawlInfoContext();
  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.players.map((player, idx) => (
        <>
          <div key={player.id}>
            <h2 className={`${!idx && "text-right"} `}>{player.name}</h2>
            <div className="flex gap-2">
              {player.brawlers.map((brawler) => (
                <div key={brawler.id} className="text-center">
                  <Image
                    src={brawlers[brawler.id].imageUrl}
                    alt="brawler-icon"
                    width={75}
                    height={75}
                  />
                  {brawler.name}
                </div>
              ))}
            </div>
          </div>
          {idx === 0 && <p className="text-3xl drop-shadow-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
