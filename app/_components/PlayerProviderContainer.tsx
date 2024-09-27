"use client";
import { PlayerInfoProvider } from "@/context/PlayterInfoContext";
import PlayerInfo from "./PlayerInfo";
import SearchId from "./SearchId";

export default function PlayerProviderContainer() {
  return (
    <PlayerInfoProvider>
      <SearchId />
      <PlayerInfo />
    </PlayerInfoProvider>
  );
}
