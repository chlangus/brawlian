import { BATTLE_PLAYER_ICON } from "@/consts/sizes";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { Player } from "@/type/battle";
import BrawlerContainer from "../../BrawlerContainer";

export default function Showdown({ player }: { player: Player }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();
  const width = `w-[${BATTLE_PLAYER_ICON}px]`;

  return (
    <button onClick={() => handleSearchIdButton(player.tag)}>
      <h3
        className={`inline-block ${width} text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {player.name}
      </h3>
      <div
        className={`${
          playerData.name === player.name
            ? "border-4 border-brawl-yellow -m-1"
            : ""
        } `}
      >
        <BrawlerContainer brawler={player.brawler} isBattle />
      </div>
    </button>
  );
}
