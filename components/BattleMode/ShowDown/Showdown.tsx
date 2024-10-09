import { BATTLE_PLAYER_ICON } from "@/consts/sizes";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { Player } from "@/type/battle";
import BrawlerContainer from "../../BrawlerContainer";

export default function Showdown({ player }: { player: Player }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <button
      onClick={() => handleSearchIdButton(player.tag)}
    >
      <p
        className={`inline-block w-[${BATTLE_PLAYER_ICON}px] text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {player.name}
      </p>
      <div
        className={`${
          playerData.name === player.name ? "border-4 border-brawl-yellow -m-1" : ""
        } `}
      >
        <BrawlerContainer brawler={player.brawler} isBattle />
      </div>
    </button>
  );
}
