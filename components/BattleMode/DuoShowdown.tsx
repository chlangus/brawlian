import { BattleData } from "@/type/battle";
import Showdown from "./ShowDown/Showdown";

export default function DuoShowdown({ battle }: { battle: BattleData }) {
  return (
    <div className="grid grid-cols-5 gap-x-4 justify-items-center">
      {battle.battle.teams.map((team) => (
        <div
          key={team[0].tag + team[1].tag}
          className="flex flex-col flex-shrink-0"
        >
          {team.map((player) => (
            <Showdown key={player.tag} player={player} />
          ))}
        </div>
      ))}
    </div>
  );
}
