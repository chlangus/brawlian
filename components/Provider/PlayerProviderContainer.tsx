"use client";

import { BrawlInfoContextProvider } from "@/context/BrawlInfoContext";
import PlayerTabContainer from "../PlayerTabs/PlayerTabContainer";
import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import SearchId from "../SearchId";
import PlayerInfo from "../PlayerInfo";

export default function PlayerProviderContainer() {
  return (
    <BrawlInfoContextProvider>
      <PlayerInfoProvider>
        <SearchId />
        <PlayerInfo />
        <PlayerTabContainer />
      </PlayerInfoProvider>
    </BrawlInfoContextProvider>
  );
}
