import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { BattleData } from "@/type/battle";
import Image from "next/image";

export default function Normal({ battle }: { battle: BattleData }) {
  const { brawlers } = useBrawlInfoContext();
  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.teams?.map((team, idx) => (
        <>
          {team.map((player) => (
            <div key={player.tag}>
              <h2 className="text-center inline-block w-[67px] text-ellipsis whitespace-nowrap overflow-hidden">
                {player.name}
              </h2>
              <div className="flex gap-2">
                <div className="text-center">
                  <Image
                    src={
                      brawlers[player.brawler.id]?.imageUrl || brawlers.imageUrl
                    }
                    alt="brawler-icon"
                    width={65}
                    height={65}
                  />
                </div>
              </div>
            </div>
          ))}
          {!idx && <p className="text-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
