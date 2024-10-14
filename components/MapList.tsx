"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import Image from "next/image";

export default function MapList() {
  const { map } = useBrawlInfoContext();
  const mapSet = new Set(Object.values(map).map((item) => item.gameMode.name));
  const MapList = Array.from(mapSet);
  return (
    <section className="relative m-auto mt-[10vh] w-[850px] bg-brawl-more-pale-blue pt-4 p-2 rounded-lg">
      {
        MapList.map((mapName) => (
          <div key={mapName}>
            <h2>{mapName}</h2>
            {/* 현재 사요오디고 있는 맵만 필터링 하여 렌더링 */}
            <div className="grid grid-cols-6 ">
              {Object.values(map)
                .filter((mapInfo) => mapInfo.gameMode.name === mapName)
                .filter((mapInfo) => mapInfo.disabled === false)
                .map((map) => (
                  <div key={map.id}>
                    <h2>{map.name}</h2>
                    <Image
                      src={map.imageUrl}
                      alt="map-image"
                      width={120}
                      height={120}
                      className="w-[120px] h-[200px] bg-black bg-opacity-50"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))

        // <Image
        //   src={map?.imageUrl}
        //   alt="image"
        //   key={map?.id}
        //   width={100}
        //   height={100}
        // />
      }
    </section>
  );
}
