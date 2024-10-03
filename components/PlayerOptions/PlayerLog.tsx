import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useState } from "react";
import PlayerBrawllerList from "./PlayerBrawllerList";
import BattleLog from "./BattleLog";

type Tab = "대전 기록" | "보유 브롤러";

export default function PlayerLog() {
  const { battleData, playerData } = usePlayerInfoContext();
  const [tabValue, setTabValue] = useState<Tab>("대전 기록");
  const handleTabClick = (value: Tab) => {
    setTabValue(value);
  };
  // 브롤러 이미지 넣기 => 전역상태로 브롤러id별 이미지 저장
  return battleData.length ? (
    <div className="mt-20 flex flex-col py-2 px-3 bg-brawl-more-pale-blue relative gap-6 rounded-lg drop-shadow-lg  w-[800px]">
      <div className="flex ml-3 absolute -top-10">
        <button
          className={`${
            tabValue === "대전 기록"
              ? "bg-brawl-pale-blue"
              : "bg-brawl-more-pale-blue"
          } p-2 font-bold text-2xl rounded-t-lg`}
          onClick={() => handleTabClick("대전 기록")}
        >
          대전 기록
        </button>
        <button
          className={`${
            tabValue === "보유 브롤러"
              ? "bg-brawl-pale-blue"
              : "bg-brawl-more-pale-blue"
          } p-2 font-bold text-2xl rounded-t-lg`}
          onClick={() => handleTabClick("보유 브롤러")}
        >
          보유 브롤러
        </button>
      </div>

      {tabValue === "대전 기록" ? (
        <BattleLog battleData={battleData} />
      ) : (
        <PlayerBrawllerList playerData={playerData} />
      )}
    </div>
  ) : (
    ""
  );
}
