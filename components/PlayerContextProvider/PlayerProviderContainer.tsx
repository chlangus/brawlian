"use client";

import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import PlayerInfo from "../PlayerInfo";
import SearchId from "../SearchId";
import PlayerLog from "../PlayerOptions/PlayerLog";
import { BrawlInfoContextProvider } from "@/context/BrawlInfoContext";

export default function PlayerProviderContainer() {
  return (
    <BrawlInfoContextProvider>
      <PlayerInfoProvider>
        <SearchId />
        <PlayerInfo />
        <PlayerLog />
      </PlayerInfoProvider>
    </BrawlInfoContextProvider>
  );
}
