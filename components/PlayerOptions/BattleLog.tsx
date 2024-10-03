import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";

export default function BattleLog({
  battleData,
}: {
  battleData: BattleData[];
}) {
  const { icon, map, brawlers } = useBrawlInfoContext();
  return battleData?.map((battle) => (
    <div
      key={battle.battleTime}
      className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex relative"
    >
      <div>
        <h2>{calculateTime(battle.battleTime)}</h2>
        <h2 className="flex gap-1">
          <Image src={trophySvg} alt="trophy-svg" />
          트로피 : {battle.battle.trophyChange || 0}
        </h2>
        <h2>{battle.battle.mode}</h2>
        <Image
          src={map[battle.event.id]?.imageUrl}
          alt="map-image"
          width={150}
          height={200}
          className="w-[150px] h-[200px]"
        />
      </div>

      <div className="flex flex-col">
        <h2
          className={`text-center text-[40px] w-full drop-shadow-xl ${
            battle.battle.trophyChange > 0 ? "text-[#00C320]" : "text-[#D00000]"
          }`}
        >
          {battle.battle.trophyChange > 0 ? "승리" : "패배"}
        </h2>
        <div className="flex w-[560px] h-[200px]">
          {battle.battle.teams ? (
            <div className="flex gap-2">
              {battle.battle.teams.map((team) => (
                <div key={team[0].tag} className="flex gap-2">
                  <div className="flex">
                    {team.map((player) => (
                      <div key={player.tag}>
                        <p>{player.name}</p>
                        <Image
                          width={65}
                          height={65}
                          className="bg-white w-[65px] h-[65px]"
                          src={
                            brawlers[player.brawler.id]
                              ? brawlers[player.brawler.id].imageUrl
                              : brawlers.imageUrl
                          }
                          alt="brawller-icon"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5">
              {battle.battle.players.map((player) => (
                <div key={player.tag} className="flex">
                  <div key={player.tag}>
                    <p className="w-[65px] overflow-hidden inline-block text-clip">{player.name}</p>
                    <Image
                      width={65}
                      height={65}
                      className="bg-white w-[65px] h-[65px]"
                      src={
                        brawlers[player.brawler.id]
                          ? brawlers[player.brawler.id].imageUrl
                          : brawlers.imageUrl
                      }
                      alt="brawller-icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ));
}
