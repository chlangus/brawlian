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
  const [playerInfo, playerLog] = await Promise.all([
    playerFetch(id, false),
    playerFetch(id, true),
  ]);
  const [playerInfoJson, playerLogJson] = await Promise.all([
    playerInfo.json(),
    playerLog.json(),
  ]);
  const playerIcon = await fetch(`${env.SUB_API_URL}/icons`);
  const playerIconJson = await playerIcon.json();
  const iconImage = playerIconJson.player[playerInfoJson.icon.id].imageUrl;
  playerInfoJson.icon = {...playerInfoJson.icon, iconImage}
  return NextResponse.json({ playerInfoJson, playerLogJson });
}
