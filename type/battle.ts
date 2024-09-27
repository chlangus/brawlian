interface Brawler {
  id: number;
  name: string;
  power: number;
  trophies: number;
}

interface Player {
  tag: string;
  name: string;
  brawler: Brawler;
}

interface Event {
  id: number;
  mode: string;
  map: string;
  imageUrl: string;
}

interface Battle {
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
