import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import BattlePlayerProfile from "./BattlePlayerProfile";
import Duel from "../BattleModePlayerContainer/Duel";

export default function BattleLog({
  battleData,
}: {
  battleData: BattleData[];
}) {
  const { map } = useBrawlInfoContext();
  console.log(battleData);
  return battleData?.map((battle) => (
    <div
      key={battle.battleTime}
      className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex relative gap-8"
    >
      <div>
        <h2>{calculateTime(battle.battleTime)}</h2>
        <h2 className="flex gap-1">
          <Image src={trophySvg} alt="trophy-svg" />
          트로피 : {battle.battle.trophyChange || 0}
        </h2>
        <h2 className="-mt-2 -mb-[2px] ml-1">{battle.battle.mode}</h2>
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
        <div className="w-[560px] h-[200px]">
          {/* event.mode에 따라 레이아웃 잡아줘야함 */}
          {battle.battle.teams ? (
            battle.event.mode === "duoShowdown" ? (
              <div className="flex gap-2">
                {battle.battle.teams.map((team) => (
                  <div key={team[0].tag} className=" gap-2">
                    {team.map((player) => (
                      <BattlePlayerProfile key={player.tag} player={player} />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col  gap-2">
                {battle.battle.teams.map((team) => (
                  <div key={team[0].tag} className=" gap-2">
                    {team.map((player) => (
                      <BattlePlayerProfile key={player.tag} player={player} />
                    ))}
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="grid grid-cols-5">
              {battle.battle.players.map((player) =>
                battle.event.mode === "duels" ? (
                  <Duel key={player.tag} player={player} />
                ) : (
                  <BattlePlayerProfile key={player.tag} player={player} />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  ));
}
