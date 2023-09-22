import { calculateTotalCPS } from "../../helpers/calculateCPS";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const { CPS, aMPC, newBuildings } = calculateTotalCPS(state.buildings);

  let newCookies = 0;
  let newEarned = 0;
  let cookieDiff = 0;

  if (state.lastSave) {
    const now = Date.now() / 1000;
    const diffInSec = now - Number(state.lastSave);
    cookieDiff = diffInSec * CPS;
    newCookies = state.player.cookies + cookieDiff;
    newEarned = state.player.cookieStats.Earned + diffInSec * CPS;
  }

  return {
    ...state,
    lastSave: undefined,
    settings: {
      ...state.settings,
      recalculateCPS: false,
    },
    newCookies: cookieDiff,
    buildings: newBuildings,
    player: {
      ...state.player,
      aMPF: CPS / state.settings.frameRate,
      aMPC,
      cookies: newCookies,
      cookieStats: {
        ...state.player.cookieStats,
        Earned: newEarned,
      },
    },
  };
};
