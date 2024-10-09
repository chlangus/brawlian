import { BattleData } from "@/type/battle";
import Showdown from "./ShowDown/Showdown";

export default function SoloShowdown({ battle }: { battle: BattleData }) {
  return (
    <div className="grid grid-cols-5 gap-x-4 justify-items-center justify-center">
      {battle.battle.players.map((player) => (
        <Showdown key={player.tag} player={player} />
      ))}
    </div>
  );
}
