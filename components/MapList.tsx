"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import Image from "next/image";

export default function MapList() {
  const { map } = useBrawlInfoContext();
  return (
    <section className="relative m-auto mt-[10vh] w-[850px] bg-brawl-more-pale-blue grid grid-cols-6 pt-4 p-2 rounded-lg">
      {Object.values(map).map((map) => (
        <Image
          src={map?.imageUrl}
          alt="image"
          key={map?.id}
          width={100}
          height={100}
        />
      ))}
    </section>
  );
}
