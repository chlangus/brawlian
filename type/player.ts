interface Gadget {
  id: number;
  name: string;
}

interface Gear {
  id: number;
  name: string;
  level: number;
}

interface StarPower {
  id: number;
  name: string;
}

export interface Brawler {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  gadgets: Gadget[];
  gears: Gear[];
  starPowers: StarPower[];
}

interface Club {
  name: string;
  tag: string;
}

export interface PlayerData {
  tag: string;
  name: string;
  nameColor: string;
  icon: {
    id: number;
    iconImage: string;
  };
  trophies: number;
  highestTrophies: number;
  expLevel: number;
  expPoints: number;
  isQualifiedFromChampionshipChallenge: boolean;
  soloVictories: number;
  duoVictories: number;
  "3vs3Victories": number;
  bestRoboRumbleTime: number;
  bestTimeAsBigBrawler: number;
  brawlers: Brawler[];
  club: Club;
}
