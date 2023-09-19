import { State } from "../store";

export const clickCookie = (state: State) => {
  return {
    ...state,

    player: {
      ...state.player,
      cookies: state.player.cookies + state.player.aMPC,

      cookieStats: {
        ...state.player.cookieStats,
        Earned: state.player.cookieStats.Earned + state.player.aMPC,
        Clicked: state.player.cookieStats.Clicked + state.player.aMPC,
      },
    },
  };
};

export const spendCookie = (state: State, amount: number) => {
  if (state.player.cookies >= amount) return state;
  return {
    ...state,
    player: {
      ...state.player,
      cookies: state.player.cookies - amount,
      cookieStats: {
        ...state.player.cookieStats,
        Spent: state.player.cookieStats.Spent + amount,
      },
    },
  };
};
