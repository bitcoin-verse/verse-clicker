import { State } from "../store";

export type ClickCookieAction = { type: "CLICK_COOKIE" };

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

export type SpendCookieAction = { type: "SPEND_COOKIE"; payload: number };

export const spendCookie = (
  state: State,
  amount: SpendCookieAction["payload"],
) => {
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

export type EarnCookieAction = { type: "EARN_COOKIE"; payload: number };

export const earnCookie = (
  state: State,
  payload: EarnCookieAction["payload"],
): State => {
  if (state.player.aMPF === 0) return state;

  return {
    ...state,
    player: {
      ...state.player,
      cookies: state.player.cookies + payload,
      cookieStats: {
        ...state.player.cookieStats,
        Earned: state.player.cookieStats.Earned + payload,
      },
    },
  };
};
