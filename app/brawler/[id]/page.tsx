"use client";

import { useBrawlInfoContext } from "@/context/BrawlInfoContext";
import { useParams } from "next/navigation";

export default function BrawlerDetail() {
  const { id } = useParams();
  const { brawlers } = useBrawlInfoContext();
  console.log(id);
  return <h1>{brawlers[Number(id)]?.name}</h1>;
}
