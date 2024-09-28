"use client";
import { PlayerInfoProvider } from "@/context/PlayerInfoContext";
import PlayerInfo from "./PlayerInfo";
import SearchId from "./SearchId";
import PlayerBattleLog from "./PlayerBattleLog";

export default function PlayerProviderContainer() {
  return (
    <PlayerInfoProvider>
      <SearchId />
      <PlayerInfo />
      <PlayerBattleLog />
    </PlayerInfoProvider>
  );
}
