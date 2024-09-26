import { NextRequest, NextResponse } from "next/server";
import { env } from "process";
// 브라우저에서 api 요청시 cors에러
// 서버단에서 api 요청하여 받아온것 내려줌으로써 해결
export async function POST(req: NextRequest) {
  // const tag = "9g9cpcglu";
  const { id } = await req.json();
  const response = await fetch(
    `${env.OFFICIAL_API_URL}/players/%23${id.slice(1)}`,
    {
      headers: {
        Authorization: `Bearer ${env.API_KEY}`,
      },
    }
  );
  const json = await response.json();
  return NextResponse.json(json);
}
