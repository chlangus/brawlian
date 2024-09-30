import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { calculateTime } from "@/utils/timeCal";
import Image from "next/image";
import { useState } from "react";

type Tab = "대전 기록" | "보유 브롤러";

export default function PlayerBattleLog() {
  const { BattleData, playerData } = usePlayerInfoContext();
  const [tabValue, setTabValue] = useState<Tab>("대전 기록");
  const handleTabClick = (value: Tab) => {
    setTabValue(value);
  };
  // 브롤러 이미지 넣기 => 전역상태로 브롤러id별 이미지 저장
  // https://api.brawlify.com/v1/brawlers
  console.log(playerData);
  return BattleData.length ? (
    <div className="mt-20 flex flex-col p-2 bg-brawl-more-pale-blue relative gap-6 rounded-lg drop-shadow-lg">
      <div className="flex ml-3 absolute -top-10">
        <button
          className={`${
            tabValue === "대전 기록"
              ? "bg-brawl-pale-blue"
              : "bg-brawl-more-pale-blue"
          } p-2  font-bold text-2xl rounded-t-lg`}
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
        BattleData?.map((battle) => (
          <div
            key={battle.battleTime}
            className="bg-brawl-pale-blue rounded-lg p-2 shadow-lg flex"
          >
            <div>
              <h2>{battle.battle.mode}</h2>
              <Image
                src={battle.event.imageUrl}
                alt="map-image"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h2>트로피 : {battle.battle.trophyChange || 0}</h2>
              <h2 className="">{calculateTime(battle.battleTime)}</h2>
            </div>
            <div className="flex">
              {battle.battle.teams
                ? battle.battle.teams.map((team, idx) => (
                    <div key={team[0].tag} className="flex gap-2">
                      <div>
                        {team.map((player) => (
                          <p key={player.tag}>{player.name}</p>
                        ))}
                      </div>
                      <span
                        className={`${
                          battle.battle.teams.length - 1 === idx && "hidden"
                        } mr-2`}
                      >
                        vs
                      </span>
                    </div>
                  ))
                : battle.battle.players.map((player, idx) => (
                    <div key={player.tag} className="flex">
                      <p>{player.name}</p>
                      <span
                        className={`${
                          battle.battle.players.length - 1 === idx && "hidden"
                        } mr-2`}
                      >
                        vs
                      </span>
                    </div>
                  ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {playerData.brawlers.map((brawler) => (
            <div key={brawler.id} className="bg-brawl-pale-blue rounded-lg p-2">
              <p>{brawler.name}</p>
              <p>{brawler.trophies}</p>
              <p>{brawler.power}</p>
              <p>{brawler.rank}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    ""
  );
}
