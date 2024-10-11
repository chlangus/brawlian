import { BattleData } from "@/type/battle";
import Individual from "./ShowDown/Individual";

export default function SoloShowdown({ battle }: { battle: BattleData }) {
  return (
    <div className="grid grid-cols-5 gap-x-4 justify-items-center justify-center">
      {battle.battle.players.map((player) => (
        <Individual key={player.tag} player={player} />
      ))}
    </div>
  );
}
