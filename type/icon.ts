interface PlayerIcon {
  id: number;
  name: string;
  name2: string;
  imageUrl: string;
  imageUrl2: string;
  brawler: string | null;
  requiredTotalTrophies: number;
  sortOrder: number;
  isReward: boolean;
  isAvailableForOffers: boolean;
}

interface ClubIcon {
  id: number;
  imageUrl: string;
}

interface PlayerData {
  [key: string]: PlayerIcon;
}

interface ClubData {
  [key: string]: ClubIcon;
}

export interface ProfileIcons {
  player: PlayerData;
  club: ClubData;
}
