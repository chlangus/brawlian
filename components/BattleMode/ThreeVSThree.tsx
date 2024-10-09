import { BATTLE_PLAYER_ICON } from "@/consts/sizes";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { BattleData } from "@/type/battle";
import BrawlerContainer from "../BrawlerContainer";

export default function ThreeVSThree({ battle }: { battle: BattleData }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();

  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.teams.map((team, idx) => (
        <div key={team[0].tag + team[1].tag} className="flex flex-shrink-0 gap-2 justify-center items-center ">
          {team.map((player) => (
            <button
              key={player.tag}
              onClick={() => handleSearchIdButton(player.tag)}
            >
              <h2
                className={`text-center inline-block w-[${BATTLE_PLAYER_ICON}px] text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {player.name}
              </h2>
              <div
                className={` ${
                  playerData.name === player.name
                    ? "border-4 border-brawl-yellow -m-1"
                    : ""
                }
   `}
              >
                <BrawlerContainer brawler={player.brawler} isBattle />
              </div>
            </button>
          ))}
          {!idx && (
            <p className="text-2xl" >
              VS
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
