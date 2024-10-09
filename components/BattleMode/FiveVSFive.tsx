import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { BattleData } from "@/type/battle";
import Image from "next/image";

export default function FiveVSFive({ battle }: { battle: BattleData }) {
  const { brawlers } = useBrawlInfoContext();
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <div className="flex flex-col text-center">
      {battle.battle.teams.map((team, idx) => (
        <>
          <div className="grid grid-cols-5 gap-x-4 justify-items-center justify-center">
            {team.map((player) => (
              <button
                key={player.tag}
                className=""
                onClick={() => handleSearchIdButton(player.tag)}
              >
                <h2 className="text-center inline-block w-[75px] text-ellipsis whitespace-nowrap overflow-hidden">
                  {player.name}
                </h2>
                <div className="flex gap-2">
                  <div className="text-center">
                    <Image
                      src={
                        brawlers[player.brawler.id]?.imageUrl ||
                        brawlers.imageUrl
                      }
                      alt="brawler-icon"
                      width={75}
                      height={75}
                      className={` ${
                        playerData.name === player.name
                          ? "border-4 border-brawl-yellow"
                          : ""
                      }
   `}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
          {!idx && <p className="text-2xl">VS</p>}
        </>
      ))}
    </div>
  );
}
