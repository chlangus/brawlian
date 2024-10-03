import { MapCollection, MapData } from "@/type/map";
import { NextResponse } from "next/server";
import { env } from "process";
//

// type Log = { event: { id: string; imageUrl: string } };
// type Map = { id: string; imageUrl: string };

export async function GET() {
  // const tag = "9g9cpcglu";
  const [icons, maps, brawlers] = await Promise.all([
    fetch(`${env.SUB_API_URL}/icons`),
    fetch(`${env.SUB_API_URL}/maps`),
    fetch(`${env.SUB_API_URL}/brawlers`),
  ]);
  const [iconJson, mapJson, brawlersJson] = await Promise.all([
    icons.json(),
    maps.json(),
    brawlers.json(),
  ]);

  // map id로 찾을 수 있게 map id를 키값으로 수정
  // 지금 이용가능한 맵만 반환
  const map = mapJson.list
    .filter((item: MapData) => item.disabled === false)
    .reduce((acc: MapCollection, map: MapData) => {
      acc[map.id] = map;
      return acc;
    });

  const brawler = brawlersJson.list.reduce(
    (acc: MapCollection, map: MapData) => {
      acc[map.id] = map;
      return acc;
    }
  );
  return NextResponse.json({ iconJson, map, brawler });
}
