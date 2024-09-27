import { NextRequest, NextResponse } from "next/server";
import { env } from "process";
// 브라우저에서 api 요청시 cors에러
// 서버단에서 api 요청하여 받아온것 내려줌으로써 해결
const playerFetch = (id: string, isbattleLog: boolean) => {
  return fetch(
    `${env.OFFICIAL_API_URL}/players/%23${id.slice(1)}${
      isbattleLog ? "/battlelog" : ""
    }`,
    {
      headers: {
        Authorization: `Bearer ${env.API_KEY}`,
      },
    }
  );
};

export async function POST(req: NextRequest) {
  // const tag = "9g9cpcglu";
  const { id } = await req.json();
  const [playerInfo, battleLog] = await Promise.all([
    playerFetch(id, false),
    playerFetch(id, true),
  ]);
  const [playerInfoJson, battleLogJson] = await Promise.all([
    playerInfo.json(),
    battleLog.json(),
  ]);

  // reason있으면 없는 유저
  if (!playerInfoJson.reason) {
    const [playerIcon, mapIcon] = await Promise.all([
      fetch(`${env.SUB_API_URL}/icons`),
      fetch(`${env.SUB_API_URL}/maps`),
    ]);
    const IconJson = await playerIcon.json();
    const iconImage = IconJson.player[playerInfoJson.icon.id].imageUrl;
    playerInfoJson.icon = { ...playerInfoJson.icon, iconImage };

    const mapIconJson = await mapIcon.json();
    // 전투기록의 맵의 id와 같은거 찾아서 imageUrl 저장
    mapIconJson.list.forEach((map) =>
      battleLogJson.items.forEach(
        (log) => log.event.id === map.id && (log.event.imageUrl = map.imageUrl)
      )
    );
  }
  return NextResponse.json({ playerInfoJson, battleLogJson });
}
