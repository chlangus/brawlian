import { BattleData } from "@/type/battle";
import Individual from "./Individual/Individual";

export default function FiveVSFive({ battle }: { battle: BattleData }) {
  return (
    <div className="flex flex-col text-center">
      {battle.battle.teams.map((team, idx) => (
        <div key={team[0].tag + team[1].tag}>
          <div className="grid grid-cols-5 justify-items-center">
            {team.map((player) => (
              <Individual key={player.tag} player={player} />
            ))}
          </div>
          {!idx && <p className="text-2xl">VS</p>}
        </div>
      ))}
    </div>
  );
}
