import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import PlayerProfile from "./PlayerProfile";
import Duel from "@/components/BattleMode/Duel";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import ThreeVSThree from "@/components/BattleMode/ThreeVSThree";
import FiveVSFive from "@/components/BattleMode/FiveVSFive";

const NORMAP_MAP = [
  "gemGrab",
  "bounty",
  "knockout",
  "heist",
  "brawlBall",
  "hotZone",
];

export default function BattleLog({
  battleData,
}: {
  battleData: BattleData[];
}) {
  const { map } = useBrawlInfoContext();
  const { playerData } = usePlayerInfoContext();
  return battleData?.map((battle) => (
    <div
      key={battle.battleTime}
      className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex relative gap-8"
    >
      {/* 왼쪽 정보 */}
      <section>
        <h2>{calculateTime(battle.battleTime)}</h2>
        <h2 className="flex gap-1">
          <Image src={trophySvg} alt="trophy-svg" />
          {/* 경쟁전인지 유무에 따라 트로트부분 변경 */}
          {battle.battle.type.toLowerCase().includes("soloranked")
            ? "경쟁전"
            : battle.battle.trophyChange || 0}
        </h2>
        <h2 className="-mt-2 -mb-[2px] ml-1">{battle.battle.mode}</h2>
        <Image
          src={map[battle.event.id]?.imageUrl}
          alt="map-image"
          width={150}
          height={200}
          className="w-[150px] h-[200px]"
        />
      </section>

      {/* 대전기록 하나 */}
      <section className="flex flex-col">
        <h2
          className={`text-center text-[40px] w-full drop-shadow-xl ${
            battle.battle.result
              ? battle.battle.result !== "defeat"
                ? "text-[#00C320]"
                : "text-[#D00000]"
              : battle.battle.trophyChange > 0
              ? "text-[#00C320]"
              : "text-[#D00000]"
          } bg-black bg-opacity-10`}
        >
          {battle.event.mode.includes("Showdown") ? (
            // 순위대로 정렬되어 반환
            <div className="flex items-center justify-center -mt-1 gap-2">
              {battle.event.mode.toLowerCase() === "soloshowdown"
                ? battle.battle.players.map((player, index) =>
                    player.name === playerData.name ? index + 1 : ""
                  )
                : battle.battle.teams.map((team, index) =>
                    team.map((player) =>
                      player.name === playerData.name ? index + 1 : ""
                    )
                  )}
              위
            </div>
          ) : battle.battle.result !== "defeat" ? (
            "승리"
          ) : (
            "패배"
          )}
        </h2>
        <div className="w-[560px] min-h-[200px]">
          {battle.event.mode === "duels" && <Duel battle={battle} />}
          {NORMAP_MAP.includes(battle.event.mode) && (
            <ThreeVSThree battle={battle} />
          )}
          {battle.event.mode === "soloShowdown" && (
            <div className="grid grid-cols-5 gap-x-4 justify-items-center">
              {battle.battle.players.map((player) => (
                <PlayerProfile key={player.tag} player={player} />
              ))}
            </div>
          )}
          {battle.event.mode === "duoShowdown" && (
            <div className="grid grid-cols-5 gap-x-4 justify-items-center">
              {battle.battle.teams.map((team) => (
                <div
                  key={team[0].tag + team[1].tag}
                  className="flex flex-col"
                >
                  {team.map((player) => (
                    <PlayerProfile key={player.tag} player={player} />
                  ))}
                </div>
              ))}
            </div>
          )}
          {battle.event.mode.includes("5V5") && <FiveVSFive battle={battle} />}
        </div>
      </section>
    </div>
  ));
}
