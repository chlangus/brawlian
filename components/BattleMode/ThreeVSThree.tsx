import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import { useSearchId } from "@/hooks/useSearchId";
import { BattleData } from "@/type/battle";
import BrawlerContainer from "../BrawlerContainer";
import { scrollToTop } from "@/utils/scrollToTop";

export default function ThreeVSThree({ battle }: { battle: BattleData }) {
  const { playerData } = usePlayerInfoContext();
  const { handleSearchIdButton } = useSearchId();
  return (
    <div className="h-full flex gap-4 justify-center items-center ">
      {battle.battle.teams.map((team, idx) => (
        <div
          key={team[0].tag + team[1].tag}
          className="flex flex-shrink-0 gap-2 justify-center items-center"
        >
          {team.map((player) => (
            <button
              key={player.tag}
              onClick={() => {
                //검색시 로딩바 추가해줘야함
                handleSearchIdButton(player.tag);
                scrollToTop();
              }}
              className="duration-150"
            >
              <h2
                className={`text-center inline-block w-[75px] text-ellipsis whitespace-nowrap overflow-hidden`}
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
          {!idx && <p className="text-2xl ml-2">VS</p>}
        </div>
      ))}
    </div>
  );
}
