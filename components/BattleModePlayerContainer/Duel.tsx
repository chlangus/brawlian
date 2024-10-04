import { Player } from "@/type/battle";
import BattlePlayerProfile from "../PlayerOptions/BattlePlayerProfile";

export default function Duel({ player }: { player: Player }) {
  return player.brawlers.map((brawler) => (
    <BattlePlayerProfile key={brawler.id} player={brawler} />
  ));
}
