import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import Image from "next/image";
import trophySvg from "@/lib/svg/trophy.svg";
import { BATTLE_PLAYER_ICON, BRAWLER_ICON } from "@/consts/sizes";

export default function BrawlerContainer({
  brawler,
  isBattle,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  brawler: any;
  isBattle?: boolean;
}) {
  const { brawlers } = useBrawlInfoContext();

  return (
    <div key={brawler.id} className={`relative ${isBattle ? "" : "p-2"}`}>
      {isBattle ? "" : <p>{brawler.name}</p>}
      <div className="relative">
        <Image
          src={brawlers[brawler.id]?.imageUrl || brawlers.imageUrl}
          alt="brawler-icon"
          width={isBattle ? BATTLE_PLAYER_ICON : BRAWLER_ICON}
          height={isBattle ? BATTLE_PLAYER_ICON : BRAWLER_ICON}
        />
        <p className="flex gap-1 absolute top-0 bg-black px-[2px] ">
          <Image src={trophySvg} alt="trophy-icon" />
          {brawler.trophies}
        </p>
        <p className="inline-block absolute leading-5 right-0 bottom-0 px-2 bg-black">
          Lv {brawler.power}
        </p>
      </div>
    </div>
  );
}
