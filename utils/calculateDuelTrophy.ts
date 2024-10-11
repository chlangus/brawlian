import { Player } from "@/type/battle";

export function calculateDuelTrophy(id: string, games: Player[]) {
  let total = 0;
  games.forEach((game) => {
    if (id.toLowerCase() === game.tag.toLowerCase())
      game.brawlers.forEach((brawler) => {
        total += brawler.trophyChange;
      });
  });
  return total;
}
