import { Player } from "@/type/battle";

export function calculateDuelTrophy(games: Player[]) {
  let total = 0;
  games.forEach((game, idx: number) =>
    game.brawlers.forEach((brawler) =>
      !idx ? (total += brawler.trophyChange) : ""
    )
  );
  return total;
}
