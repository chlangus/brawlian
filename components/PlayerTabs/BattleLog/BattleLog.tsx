import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import Duel from "@/components/BattleMode/Duel";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import ThreeVSThree from "@/components/BattleMode/ThreeVSThree";
import FiveVSFive from "@/components/BattleMode/FiveVSFive";
import DuoShowdown from "@/components/BattleMode/DuoShowdown";
import SoloShowdown from "@/components/BattleMode/SoloShowdown";
import { calculateDuelTrophy } from "@/utils/calculateDuelTrophy";
import RoboRumble from "@/components/BattleMode/RoboRumble";

const NORMAP_MAP = [
  "gemGrab",
  "bounty",
  "knockout",
  "heist",
  "brawlBall",
  "hotZone",
  "wipeout",
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
        <div className="ml-2 text-lg">
          <h2>{calculateTime(battle.battleTime)}</h2>
          <div className="flex gap-[6px] items-center">
            <>
              <Image src={trophySvg} alt="trophy-svg" />
              {battle.battle.type?.toLowerCase().includes("soloranked") ? (
                <p className="font-bold">경쟁전</p>
              ) : (
                <h2 className="flex gap-1">
                  {battle.battle.mode === "duels"
                    ? calculateDuelTrophy(playerData.tag, battle.battle.players)
                    : battle.battle.trophyChange || 0}
                </h2>
              )}
            </>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image
              src={map[battle.event.id]?.gameMode.imageUrl}
              alt="gamemode-img"
              width={12}
              height={12}
              className="h-4 w-4"
            />
            <h2>{battle.battle.mode}</h2>
          </div>
        </div>
        <Image
          src={map[battle.event.id]?.imageUrl}
          alt="map-image"
          width={190}
          height={240}
          className={`w-[190px] h-[240px] bg-black bg-opacity-50`}
        />
      </section>

      {/* 대전기록 하나 */}
      <section className="flex flex-col justify-around">
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
          {battle.event.mode?.includes("Showdown") ? (
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
        {/* 대전모드별 컴포넌트 */}
        <div className="w-[560px] min-h-[200px]">
          {battle.battle.mode === "bossFight" && <RoboRumble battle={battle} />}
          {battle.battle.mode === "duels" && <Duel battle={battle} />}
          {NORMAP_MAP.includes(battle.event.mode || battle.battle.mode) && (
            <ThreeVSThree battle={battle} />
          )}
          {battle.event.mode === "soloShowdown" && (
            <SoloShowdown battle={battle} />
          )}
          {battle.battle.mode === "duoShowdown" && (
            <DuoShowdown battle={battle} />
          )}
          {battle.event.mode?.includes("5V5") && <FiveVSFive battle={battle} />}
        </div>
      </section>
    </div>
  ));
}
