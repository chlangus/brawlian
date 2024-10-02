import { BattleData } from "@/type/battle";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";

export default function BattleLog({
  battleData,
}: {
  battleData: BattleData[];
}) {
  console.log(battleData);
  return battleData?.map((battle) => (
    <div
      key={battle.battleTime}
      className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex relative"
    >
      <h2
        className={`absolute text-black text-center text-[40px] w-full ${
          battle.battle.trophyChange > 0 ? "text-[#00C320]" : "text-[#D00000]"
        }`}
      >
        {battle.battle.trophyChange > 0 ? "승리" : "패배"}
      </h2>
      <div>
        <h2>{calculateTime(battle.battleTime)}</h2>
        <h2 className="flex gap-1">
          <Image src={trophySvg} alt="trophy-svg" />
          트로피 : {battle.battle.trophyChange || 0}
        </h2>
        <h2>{battle.battle.mode}</h2>
        <Image
          src={battle.event.imageUrl}
          alt="map-image"
          width={200}
          height={200}
        />
      </div>

      <div className="flex">
        {battle.battle.teams
          ? battle.battle.teams.map((team, idx) => (
              <div key={team[0].tag} className="flex gap-2">
                <div>
                  {team.map((player) => (
                    <p key={player.tag}>{player.name}</p>
                  ))}
                </div>
                <span
                  className={`${
                    battle.battle.teams.length - 1 === idx && "hidden"
                  } mr-2`}
                >
                  vs
                </span>
              </div>
            ))
          : battle.battle.players.map((player, idx) => (
              <div key={player.tag} className="flex">
                <p>{player.name}</p>
                <span
                  className={`${
                    battle.battle.players.length - 1 === idx && "hidden"
                  } mr-2`}
                >
                  vs
                </span>
              </div>
            ))}
      </div>
    </div>
  ));
}
