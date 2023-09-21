import buildings from "../buildings";
import { State } from "../store";

export type RecalculateCPSAction = { type: "RECALCULATE_CPS" };

export const recalculateCPS = (state: State): State => {
  const buildingCount = buildings.length;

  let CPS = 0;

  state.buildings.forEach((building, index) => {
    let multiplier = 1;

    if (index === 0) {
      state.player.aMPC = 1;
    }

    building.upgrades.forEach((upgrade) => {
      if (!upgrade.owned) return;

      if (upgrade.special === undefined) {
        multiplier *= 2;
        if (index === 0) {
          state.player.aMPC *= 2;
        }
      } else {
        // Special casing for all special types of upgrades
        // There may at some point be more than just cursors here, as theres special stuff for grandmas as well.

        if (index === 0) {
          const nonCursorBuildingCount = buildingCount - building.amount;
          building.specialCPS +=
            upgrade.special * nonCursorBuildingCount * building.amount;
          state.player.aMPC += upgrade.special * nonCursorBuildingCount;
        }
      }
    });

    CPS +=
      building.baseEffect * building.amount * multiplier + building.specialCPS;
  });

  let cookies = state.player.cookies;
  let Earned = state.player.cookieStats.Earned;
  // console.log(cookies, Earned);
  if (state.lastSave) {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - Number(state.lastSave);
    // const diff = now - state.lastSave;
    cookies = state.player.cookies + diff * (CPS / state.settings.frameRate);
    Earned = state.player.cookies + diff * (CPS / state.settings.frameRate);

    console.log(state.lastSave, now, diff, CPS);
    console.log("new cookie amount", cookies);
  }

  return {
    ...state,
    lastSave: undefined,
    settings: {
      ...state.settings,
      recalculateCPS: false,
    },

    player: {
      ...state.player,
      cookies,
      aMPF: CPS / state.settings.frameRate,
      cookieStats: {
        ...state.player.cookieStats,
        Earned,
      },
    },
  };

  return state;
};
