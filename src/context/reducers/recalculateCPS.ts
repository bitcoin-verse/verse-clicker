import { calculateTotalCPS } from "../../helpers/calculateCPS";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const { CPS, aMPC } = calculateTotalCPS(state.buildings);

  let newCookies = 0;
  let newEarned = 0;
  let cookieDiff = 0;

  const aMPF = CPS / state.settings.frameRate;

  if (state.lastSaveLoaded) {
    const now = new Date();
    const then = new Date(state.lastSaveLoaded * 1000);
    const diff = Math.abs(now.getTime() - then.getTime()) / 1000;
    cookieDiff = diff * CPS;
    newCookies = state.player.cookies + cookieDiff;
    newEarned = state.player.cookieStats.Earned + newCookies;
  }

  return {
    ...state,
    settings: {
      ...state.settings,
      recalculateCPS: false,
    },
    lastSaveLoaded: undefined,
    newCookies: cookieDiff,
    player: {
      ...state.player,
      aMPC,
      aMPF,
      cookies: newCookies,
      cookieStats: {
        ...state.player.cookieStats,
        Earned: newEarned,
      },
    },
  };
};
