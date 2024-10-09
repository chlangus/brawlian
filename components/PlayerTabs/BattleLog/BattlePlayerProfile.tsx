import { BATTLE_PLAYER_ICON } from "@/consts/size";
import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { Player } from "@/type/battle";
import Image from "next/image";

export default function BattlePlayerProfile({ player }: { player: Player }) {
  const { brawlers } = useBrawlInfoContext();
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <button
      onClick={() => handleSearchIdButton(player.tag)}
      className={`w-[${BATTLE_PLAYER_ICON}px]`}
    >
      <p
        className={`inline-block w-[${BATTLE_PLAYER_ICON}px] text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {player.name}
      </p>
      <Image
        width={BATTLE_PLAYER_ICON}
        height={BATTLE_PLAYER_ICON}
        className={`bg-white w-[${BATTLE_PLAYER_ICON}px] h-[${BATTLE_PLAYER_ICON}px] ${
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
