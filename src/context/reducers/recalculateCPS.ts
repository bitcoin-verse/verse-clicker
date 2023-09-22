import { calculateTotalCPS } from "../../helpers/calculateCPS";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const { CPS, aMPC, newBuildings } = calculateTotalCPS(state.buildings);

  let newCookies = state.player.cookies;
  let newEarned = state.player.cookieStats.Earned;

  if (state.lastSave) {
    const now = Date.now() / 1000;
    const diffInSec = now - Number(state.lastSave);

    newCookies = state.player.cookies + diffInSec * CPS;
    newEarned = state.player.cookies + diffInSec * CPS;
  }

  return {
    ...state,
    lastSave: undefined,
    settings: {
      ...state.settings,
      recalculateCPS: false,
    },
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
