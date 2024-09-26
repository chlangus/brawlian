import { usePlayerInfoContext } from "@/context/PlayterInfoContext";
import Image from "next/image";

export default function PlayerInfo() {
  const { playerData } = usePlayerInfoContext();
  return (
    <section className="w-full mt-[30px]">
      {playerData.tag && (
        <div className="relative bg-blue-500 w-full max-w-[600px] m-auto py-4 px-8 rounded-lg shadow-xl">
          <div className="flex gap-4 justify-between text-center">
            <h2 className="absolute font-bold text-2xl -top-5 left-3">
              프로필
            </h2>
            <div className="flex gap-4">
              <div className="mt-2">
                {/* 이미지 연결해줘야함 */}
                <Image
                  src="https://cdn-old.brawlify.com/profile/28000000.png?v=1"
                  alt="player-tag-image"
                  width={80}
                  height={80}
                />

                <p className="text-gray-200">{playerData.tag}</p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xl font-bold">닉네임</p>
                  <p
                    className={`text-2xl `}
                    style={{ color: `#${playerData.nameColor.slice(4)}` }}
                  >
                    {playerData.name}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">클럽</p>
                  <p className="text-xl">{playerData.club.name}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">트로피</p>
              <div>
                <p>현재</p>
                <p>{playerData.trophies}</p>
              </div>
              <div>
                <p>최고</p>
                <p>{playerData.highestTrophies}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-bold text-xl">3vs3 승리</p>
                <p>{playerData["3vs3Victories"]}</p>
              </div>
              <div>
                <p className="font-bold text-xl">듀오 승리</p>
                <p>{playerData.duoVictories}</p>
              </div>
              <div>
                <p className="font-bold text-xl">솔로 승리</p>
                <p>{playerData.soloVictories}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
