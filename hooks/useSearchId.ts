import { usePlayerInfoContext } from "@/context/PlayerInfoContext";

export const useSearchId = () => {
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
  return { handleSearchIdButton };
};
