import Player from "../classes/Player";

export const spendPlayerCookies = (player: Player, cost: number): Player => {
  return {
    ...player,
    cookies: player.cookies - cost,
    cookieStats: {
      ...player.cookieStats,
      Spent: player.cookieStats.Spent + cost,
    },
  };
};

export const earnPlayerCookies = (player: Player, amount: number): Player => {
  return {
    ...player,
    cookies: player.cookies + amount,
    cookieStats: {
      ...player.cookieStats,
      Earned: player.cookieStats.Earned + amount,
    },
  };
};

export const clickedPlayerCookies = (player: Player): Player => {
  return {
    ...player,
    cookies: player.cookies + player.aMPC,
    cookieStats: {
      ...player.cookieStats,
      Earned: player.cookieStats.Earned + player.aMPC,
      Clicked: player.cookieStats.Clicked + 1,
    },
  };
};
