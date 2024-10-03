interface ClassInfo {
  id: number;
  name: string;
}

interface RarityInfo {
  id: number;
  name: string;
  color: string;
}

interface StarPower {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}

interface Gadget {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}

interface Video {
  type: number;
  name: string;
  description: string;
  duration: string;
  videoUrl: string;
  previewUrl: string;
  uploadDate: string;
}

export interface Brawler {
  id: number;
  avatarId: number;
  name: string;
  hash: string;
  path: string;
  released: boolean;
  version: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: ClassInfo;
  rarity: RarityInfo;
  unlock: string | null;
  description: string;
  starPowers: StarPower[];
  gadgets: Gadget[];
  videos: Video[];
}

export interface Brawlers {
  [key: number]: Brawler;
}
