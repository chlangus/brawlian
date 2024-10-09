"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import Image from "next/image";
import Link from "next/link";

export default function BrawlerList() {
  const { brawlers } = useBrawlInfoContext();
  return (
    <section className="m-auto w-[850px] bg-brawl-more-pale-blue grid grid-cols-6">
      {Object.values(brawlers).map((brawler, idx) => (
        <Link href={`/brawler/${brawler?.id}`} key={idx} className="">
          <p>{brawler?.name}</p>
          <Image src={brawler?.imageUrl} alt="image" width={100} height={100} />
        </Link>
      ))}
    </section>
  );
}
