import { calculateTotalCPS } from "../../helpers/calculateCPS";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const { CPS, aMPC } = calculateTotalCPS(state.buildings);

  const aMPF = CPS / state.settings.frameRate;

  let cookieDiff = 0;

  if (state.lastSaveLoaded) {
    const now = new Date();
    const then = new Date(state.lastSaveLoaded * 1000);
    const diff = Math.abs(now.getTime() - then.getTime()) / 1000;
    cookieDiff = diff * CPS;
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
      aMPC: state.verseHolder ? aMPC * 10 : aMPC,
      aMPF,
      cookies: state.player.cookies + cookieDiff,
      cookieStats: {
        ...state.player.cookieStats,
        Earned: state.player.cookieStats.Earned + cookieDiff,
      },
    },
  };
};
