import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { Player } from "@/type/battle";
import Image from "next/image";

export default function PlayerProfile({ player }: { player: Player }) {
  const { brawlers } = useBrawlInfoContext();
  const { setPlayerData, setBattleData } = usePlayerInfoContext();

  const handleSearchIdButton = async (tag: string) => {
    const response = await fetch("api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: tag }),
    });

    const { playerInfoJson, battleLogJson } = await response.json();
    if (playerInfoJson.reason) {
      alert("존재하지 않는 유저입니다.");
    } else {
      setPlayerData(playerInfoJson);
      setBattleData(battleLogJson.items);
    }
  };
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
        className="bg-white w-[65px] h-[65px]"
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
