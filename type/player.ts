// Brawler 관련 타입
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

interface Brawler {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  gadgets: Gadget[];
  gears: Gear[];
  starPowers: StarPower[];
}

// Club 관련 타입
interface Club {
  name: string;
  tag: string;
}

// 전체 데이터 타입 정의
export interface PlayerData {
  tag: string;
  name: string;
  nameColor: string;
  icon: {
    id: number;
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
