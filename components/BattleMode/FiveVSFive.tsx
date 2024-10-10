import { BATTLE_PLAYER_ICON } from "@/consts/sizes";
import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { BattleData } from "@/type/battle";
import BrawlerContainer from "../BrawlerContainer";
import { scrollToTop } from "@/utils/scrollToTop";

export default function FiveVSFive({ battle }: { battle: BattleData }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();
  const width = `w-[${BATTLE_PLAYER_ICON}px]`;
  return (
    <div className="flex flex-col text-center">
      {battle.battle.teams.map((team, idx) => (
        <div key={team[0].tag + team[1].tag}>
          <div className="grid grid-cols-5 justify-items-center">
            {team.map((player) => (
              <button
                key={player.tag}
                onClick={() => {
                  handleSearchIdButton(player.tag)
                  scrollToTop();
                }}
              >
                <h2
                  className={`text-center inline-block ${width} text-ellipsis whitespace-nowrap overflow-hidden`}
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
          </div>
          {!idx && <p className="text-2xl">VS</p>}
        </div>
      ))}
    </div>
  );
}
