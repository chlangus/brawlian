interface Environment {
  id: number;
  name: string;
  hash: string;
  path: string;
  version: number;
  imageUrl: string;
}

interface GameMode {
  id: number;
  name: string;
  hash: string;
  version: number;
  color: string;
  bgColor: string;
  link: string;
  imageUrl: string;
}

export interface MapData {
  id: number;
  new: boolean;
  disabled: boolean;
  name: string;
  hash: string;
  version: number;
  link: string;
  imageUrl: string;
  credit: string;
  environment: Environment;
  gameMode: GameMode;
  lastActive: string | null;
  dataUpdated: number;
}

export interface MapCollection {
  [key: string]: MapData;
}
