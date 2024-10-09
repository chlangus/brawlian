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
      className="w-[75px]"
    >
      <p className="inline-block w-[75px] text-ellipsis whitespace-nowrap overflow-hidden">
        {player.name}
      </p>
      <Image
        width={75}
        height={75}
        className={`bg-white w-[75px] h-[75px] ${
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
