"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";

export default function MapList() {
  const { map } = useBrawlInfoContext();
  return (
    <section className="relative m-auto mt-[10vh] w-[850px] bg-brawl-more-pale-blue grid grid-cols-6 pt-4 p-2 rounded-lg">
      {Object.values(map).map(
        (map) =>
          map.gameMode?.name
          // <Image
          //   src={map?.imageUrl}
          //   alt="image"
          //   key={map?.id}
          //   width={100}
          //   height={100}
          // />
      )}
    </section>
  );
}
