interface BattleEvent {
  id: number;
  mode: string;
  map: string;
}

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

interface Battle {
  mode: string;
  type: string;
  trophyChange: number;
  players: Player[];
}

interface BattleData {
  battleTime: string;
  event: BattleEvent;
  battle: Battle;
}
