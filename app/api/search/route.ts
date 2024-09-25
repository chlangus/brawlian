import { NextResponse } from "next/server";
import { env } from "process";

export async function GET() {
  const tag = "9g9cpcglu";

  const response = await fetch(
    `${env.API_URL}/players/%23${tag}`,
    {
      headers: {
        Authorization:
          `Bearer ${env.API_KEY}`,
      },
    }
  );
  const json = await response.json();
  return NextResponse.json(json);
}
