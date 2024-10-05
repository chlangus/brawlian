import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useEffect, useState } from "react";

export default function SearchId() {
  const { setPlayerData, setBattleData } = usePlayerInfoContext();
  const { setIcon, setMap, setBrawlers } = useBrawlInfoContext();
  const [idValue, setIdValue] = useState<string>("");
  const handleSearchIdButton = async () => {
    const response = await fetch("api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idValue }),
    });

    const { playerInfoJson, battleLogJson } = await response.json();
    if (playerInfoJson.reason) {
      alert("존재하지 않는 유저입니다.");
    } else {
      setPlayerData(playerInfoJson);
      setBattleData(battleLogJson.items);
    }
  };

  useEffect(() => {
    const fetchBrawlInfo = async () => {
      const { iconJson, map, brawler } = await fetch("api/brawlInfo").then(
        (res) => res.json()
      );
      setIcon(iconJson);
      setMap(map);
      setBrawlers(brawler);
    };
    fetchBrawlInfo();
  }, [setIcon, setMap, setBrawlers]);

  return (
    <div className="flex gap-[17px]">
      <input
        id="search"
        type="text"
        onChange={({ target }) => setIdValue(target.value)}
        value={idValue}
        className="text-black text-xl placeholder:text-gray-600 py-3 px-6 rounded-2xl shadow-lg w-[300px]"
        placeholder="사용자 tag 검색"
      />
      <button
        type="button"
        className="bg-brawl-red font-semibold px-6 p-3 rounded-2xl shadow-lg flex hover:scale-110 duration-75"
        onClick={handleSearchIdButton}
      >
        검색
      </button>
    </div>
  );
}
