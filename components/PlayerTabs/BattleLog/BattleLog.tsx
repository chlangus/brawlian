import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import PlayerProfile from "./PlayerProfile";
import Duel from "@/components/BattleMode/Duel";
import Normal from "@/components/BattleMode/Normal";

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
  console.log(battleData[0].event.mode == "gemGrab" || "Bounty" || "knockout");
  return battleData?.map((battle) => (
    <div
      key={battle.battleTime}
      className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex relative gap-8"
    >
      <div>
        <h2>{calculateTime(battle.battleTime)}</h2>
        {battle.battle.mode.includes("Showdown") ? (
          ""
        ) : (
          <h2 className="flex gap-1">
            <Image src={trophySvg} alt="trophy-svg" />
            {/* 경쟁전인지 유무에 따라 트로트부분 변경 */}
            {battle.battle.type.toLowerCase().includes("soloranked")
              ? "경쟁전"
              : battle.battle.trophyChange || 0}
          </h2>
        )}
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
            <div className="flex items-center justify-center -mt-2 gap-2">
              <Image
                src={trophySvg}
                alt="trophy-svg"
                className="w-10 h-10 mt-2"
              />
              {battle.battle.trophyChange || 0}
            </div>
          ) : battle.battle.result !== "defeat" ? (
            "승리"
          ) : (
            "패배"
          )}
        </h2>
        <div className="w-[560px] h-[200px]">
          {battle.event.mode === "duels" && <Duel battle={battle} />}
          {NORMAP_MAP.includes(battle.event.mode) && <Normal battle={battle} />}
          {battle.event.mode === "soloShowdown" && (
            <div className="grid grid-cols-5">
              {battle.battle.players.map((player) => (
                <PlayerProfile key={player.tag} player={player} />
              ))}
            </div>
          )}
          {battle.event.mode === "duoShowdown" && (
            <div className="flex gap-6 justify-between">
              {battle.battle.teams.map((team, idx) => (
                <div key={team[0].tag} className="flex items-center gap-[26px]">
                  <div className="flex flex-col">
                    {team.map((player) => (
                      <PlayerProfile key={player.tag} player={player} />
                    ))}
                  </div>
                  {[0, 1, 2, 3].includes(idx) && (
                    <hr className="h-24 w-[2px] bg-black border-none" />
                  )}
                </div>
              ))}
            </div>
          )}
          {battle.event.mode.includes("5V5") && <div>5v5</div>}
        </div>
      </div>
    </div>
  ));
}
