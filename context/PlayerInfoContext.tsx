"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { PlayerData } from "@/type/player";
import { BattleData } from "@/type/battle";

const initialPlayerData: PlayerData = {
  tag: "",
  name: "",
  nameColor: "",
  icon: {
    id: 0,
    iconImage: "",
  },
  trophies: 0,
  highestTrophies: 0,
  expLevel: 0,
  expPoints: 0,
  isQualifiedFromChampionshipChallenge: false,
  soloVictories: 0,
  duoVictories: 0,
  "3vs3Victories": 0,
  bestRoboRumbleTime: 0,
  bestTimeAsBigBrawler: 0,
  brawlers: [],
  club: {
    name: "",
    tag: "",
  },
};

const PlayerContext = createContext<{
  playerData: PlayerData;
  setPlayerData: Dispatch<SetStateAction<PlayerData>>;
  battleData: BattleData[];
  setBattleData: Dispatch<SetStateAction<BattleData[]>>;
}>({
  playerData: initialPlayerData,
  setPlayerData: () => {},
  battleData: [],
  setBattleData: () => {},
});

export const PlayerInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playerData, setPlayerData] = useState<PlayerData>(initialPlayerData);
  const [battleData, setBattleData] = useState<BattleData[]>([]);

  return (
    <PlayerContext.Provider
      value={{ playerData, setPlayerData, battleData, setBattleData }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerInfoContext = () => {
  return useContext(PlayerContext);
};
