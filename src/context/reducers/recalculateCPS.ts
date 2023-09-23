import { calculateTotalCPS } from "../../helpers/calculateCPS";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const { CPS, aMPC } = calculateTotalCPS(state.buildings);

  let newCookies = 0;
  let newEarned = 0;
  let cookieDiff = 0;

  if (state.lastSaveLoaded) {
    const now = Date.now() / 1000;
    const diffInSec = now - Number(state.lastSaveLoaded);
    cookieDiff = diffInSec * CPS;
    newCookies = state.player.cookies + cookieDiff;
    newEarned = state.player.cookieStats.Earned + diffInSec * CPS;
  }
  console.log(newCookies, newEarned);
  const aMPF = CPS / state.settings.frameRate;

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
      // cookies: newCookies,
      cookieStats: {
        ...state.player.cookieStats,
        // Earned: newEarned,
      },
    },
  };
};
