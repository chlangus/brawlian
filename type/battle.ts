export interface Brawler {
  id: number;
  name: string;
  power: number;
  trophies: number;
  trophyChange: number;
}

export interface Player {
  id: number;
  tag: string;
  name: string;
  brawler: Brawler;
  brawlers: Brawler[];
}

interface Event {
  id: number;
  mode: string;
  map: string;
  imageUrl: string;
}

interface Battle {
  result: string;
  duration: number;
  mode: string;
  type: string;
  trophyChange: number;
  teams: Player[][];
  players: Player[];
}

export interface BattleData {
  battleTime: string;
  event: Event;
  battle: Battle;
}
