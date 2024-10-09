import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { Player } from "@/type/battle";
import Image from "next/image";

export default function PlayerProfile({ player }: { player: Player }) {
  const { brawlers } = useBrawlInfoContext();
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <button
      onClick={() => handleSearchIdButton(player.tag)}
      className="w-[67px]"
    >
      <p className="inline-block w-[67px] text-ellipsis whitespace-nowrap overflow-hidden">
        {player.name}
      </p>
      <Image
        width={65}
        height={65}
        className={`bg-white w-[65px] h-[65px] ${
          playerData.name === player.name ? "border-4 border-brawl-yellow" : ""
        }`}
        src={
          brawlers[player.brawler?.id || player.id]
            ? brawlers[player.brawler?.id || player.id].imageUrl
            : brawlers.imageUrl
        }
        alt="brawller-icon"
      />
    </button>
  );
}
