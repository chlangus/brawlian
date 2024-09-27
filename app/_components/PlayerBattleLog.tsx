import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";

export default function PlayerBattleLog() {
  const { BattleData } = usePlayerInfoContext();
  return (
    <div className="grid grid-cols-2 gap-4 mt-10 bg-blue-300 p-4 rounded-lg">
      {BattleData?.map((battle) => (
        <div
          key={battle.battleTime}
          className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex"
        >
          <div>
            <h2>{battle.battle.mode}</h2>
            <Image
              src={battle.event.imageUrl}
              alt="map-image"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h2>트로피 : {battle.battle.trophyChange || 0}</h2>
            <h2 className="">{calculateTime(battle.battleTime)}</h2>
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
              : battle.battle.players.map((player,idx) => (
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
      ))}
    </div>
  );
}
