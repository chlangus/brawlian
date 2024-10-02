"use client";

import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import PlayerInfo from "../PlayerInfo";
import SearchId from "../SearchId";
import PlayerLog from "../PlayerOptions/PlayerLog";

export default function PlayerProviderContainer() {
  return (
    <PlayerInfoProvider>
      <SearchId />
      <PlayerInfo />
      <PlayerLog />
    </PlayerInfoProvider>
  );
}
