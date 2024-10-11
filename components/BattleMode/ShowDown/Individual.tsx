import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { Player } from "@/type/battle";
import BrawlerContainer from "../../BrawlerContainer";
import { scrollToTop } from "@/utils/scrollToTop";

export default function Individual({ player }: { player: Player }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <button
      onClick={() => {
        handleSearchIdButton(player.tag);
        scrollToTop();
      }}
    >
      <h3
        className={`inline-block w-[75px] text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {player.name}
      </h3>
      <div
        className={`${
          playerData.name === player.name
            ? "border-4 border-brawl-yellow -my-1 -ml-1"
            : ""
        } `}
      >
        <BrawlerContainer brawler={player.brawler} isBattle />
      </div>
    </button>
  );
}
