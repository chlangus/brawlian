import { usePlayerInfoContext } from "@/context/PlayerInfoContext";
import clubSvg from "@/lib/svg/club.svg";
import threeSvg from "@/lib/svg/3vs3.svg";
import duoSvg from "@/lib/svg/duo.svg";
import soloSvg from "@/lib/svg/solo.svg";
import trophySvg from "@/lib/svg/trophy.svg";
import Image from "next/image";

export default function PlayerInfo() {
  const { playerData } = usePlayerInfoContext();
  return (
    <section className="w-full mt-[30px]">
      {playerData.tag && (
        <div className="relative bg-brawl-pale-blue w-full max-w-[600px] m-auto py-4 px-8 rounded-lg shadow-2xl">
          <div className="flex gap-4 justify-between text-center">
            <h2 className="absolute font-bold text-2xl -top-5 left-9">
              프로필
            </h2>
            <div className="flex gap-4 flex-shrink-0">
              <div className="mt-2 ">
                <Image
                  src={playerData.icon.iconImage}
                  alt="player-tag-image"
                  width={80}
                  height={80}
                />
                <p className="text-gray-200">{playerData.tag}</p>
                <p>LV. {playerData.expLevel}</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 flex-shrink-0 items-start">
                  <p
                    className="text-xl mt-2"
                    style={{ color: `#${playerData.nameColor.slice(4)}` }}
                  >
                    {playerData.name}
                  </p>
                  <p className="flex gap-2 items-center justify-center">
                    <Image src={clubSvg} alt="club-svg" />
                    {playerData.club.name}
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col flex-shrink-0">
                    <h3 className="text-lg flex gap-1">
                      <Image src={trophySvg} alt="throphy-svg" />
                      트로피
                    </h3>
                    <div>
                      <p className="text-sm">best</p>
                      <p>{playerData.highestTrophies}</p>
                    </div>
                    <div>
                      <p className="text-sm">now</p>
                      <p>{playerData.trophies}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg flex gap-1">
                      <Image src={threeSvg} alt="three-svg" />
                      3vs3 승리
                    </h3>
                    <p>{playerData["3vs3Victories"]}</p>
                  </div>
                  <div>
                    <h3 className="text-lg flex gap-1">
                      <Image src={duoSvg} alt="suo-svg" />
                      듀오 승리
                    </h3>
                    <p>{playerData.duoVictories}</p>
                  </div>
                  <div>
                    <h3 className="text-lg flex gap-1">
                      <Image src={soloSvg} alt="solo-svg" />
                      솔로 승리
                    </h3>
                    <p>{playerData.soloVictories}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
