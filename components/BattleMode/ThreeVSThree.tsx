import { BattleData } from "@/type/battle";
import Individual from "./Individual/Individual";

export default function ThreeVSThree({ battle }: { battle: BattleData }) {
  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.teams.map((team, idx) => (
        <div
          key={team[0].tag + team[1].tag}
          className="flex flex-shrink-0 gap-2 justify-center items-center"
        >
          {team.map((player) => (
            <Individual key={player.tag} player={player} />
          ))}
          {!idx && <p className="text-2xl ml-2">VS</p>}
        </div>
      ))}
    </div>
  );
}
