import { usePlayerInfoContext } from "@/context/PlayterInfoContext";
import { useState } from "react";
export default function SearchId() {
  const { setPlayerData } = usePlayerInfoContext();
  const [idValue, setIdValue] = useState<string>("");

  const handleSearchIdButton = async () => {
    const response = await fetch("api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idValue }),
    });
    const { playerInfoJson, playerLogJson } = await response.json();
    if (playerInfoJson.reason) {
      alert("존재하지 않는 유저입니다.");
    } else {
      setPlayerData(playerInfoJson);
    }
  };
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
        className="bg-[#ff0000] font-semibold px-6 p-3 rounded-2xl shadow-lg flex hover:scale-110 duration-75"
        onClick={handleSearchIdButton}
      >
        검색
      </button>
    </div>
  );
}
