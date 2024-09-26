"use client";

import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { PlayerData } from "@/type/player";

const initialPlayerData: PlayerData = {
  tag: "",
  name: "",
  nameColor: "",
  icon: {
    id: 0,
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
  setPlayerData: React.Dispatch<SetStateAction<PlayerData>>;
}>({ playerData: initialPlayerData, setPlayerData: () => {} });

export const PlayerInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playerData, setPlayerData] = useState<PlayerData>(initialPlayerData);

  return (
    <PlayerContext.Provider value={{ playerData, setPlayerData }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerInfoContext = () => {
  return useContext(PlayerContext);
};
