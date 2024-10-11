import { BattleData } from "@/type/battle";
import Individual from "./ShowDown/Individual";

export default function RoboRumble({ battle }: { battle: BattleData }) {
  console.log(battle);
  return (
    <div className="relative grid grid-cols-3 justify-items-center h-full bg-black bg-opacity-50 rounded-lg">
      <h2 className="absolute top-1 text-2xl text-brawl-red">
        {battle.battle?.level.name}
      </h2>
      {battle.battle.players.map((player) => (
        <Individual key={player.tag} player={player} />
      ))}
    </div>
  );
}
