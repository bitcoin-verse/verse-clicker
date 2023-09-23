import { Reducer } from "react";
import { State, initialState } from "./store";
import { clickCookie, earnCookie } from "./reducers/player";
import {
  LoadingAction,
  gameSaved,
  loadSave,
  setLoading,
} from "./reducers/saving";
import { buyBuilding, buyUpgrade, setBuilding } from "./reducers/building";
import { recalculateCPS } from "./reducers/recalculateCPS";
import { leaderboardSaved } from "./reducers/leaderboard";

import { GameSavedAction, LoadSaveAction } from "./reducers/saving";
import {
  BuyBuildingAction,
  BuyUpgradeAction,
  SetBuildingAction,
} from "./reducers/building";
import { ClickCookieAction, EarnCookieAction } from "./reducers/player";
import { RecalculateCPSAction } from "./reducers/recalculateCPS";
import { LeaderboardSavedAction } from "./reducers/leaderboard";

export type Action =
  | GameSavedAction
  | LoadSaveAction
  | ClickCookieAction
  | EarnCookieAction
  | RecalculateCPSAction
  | { type: "RESET_GAME" }
  | SetBuildingAction
  | BuyBuildingAction
  | BuyUpgradeAction
  | LeaderboardSavedAction
  | LoadingAction

  // ASYNC ACTION STATES
  | { type: "STARTED" }
  | { type: "FAILED"; error: Error }
  | { type: "QUERY_CHANGED"; query: string };

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // Cookie reducers
    case "CLICK_COOKIE":
      return clickCookie(state);
    case "EARN_COOKIE":
      return earnCookie(state, action.payload);

    case "LEADERBOARD_SAVED":
      return leaderboardSaved(state, action.payload);

    // Game loop
    case "RECALCULATE_CPS":
      return recalculateCPS(state);

    // Upgrades
    case "BUY_BUILDING":
      return buyBuilding(state, action.payload);
    case "BUY_UPGRADE":
      return buyUpgrade(state, action.payload);

    // ASCYNC ACTION STATES
    case "GAME_SAVED":
      return gameSaved(state, action.payload);
    case "GAME_LOADED":
      return loadSave(state, action.payload);

    case "SET_LOADING":
      return setLoading(state, action.payload);

    case "STARTED":
      return {
        ...state,
        pending: true,
      };
    case "FAILED":
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case "QUERY_CHANGED":
      return {
        ...state,
        query: action.query,
      };

    case "RESET_GAME":
      return initialState;
    case "SET_BUILDING":
      return setBuilding(state, action.payload);
    default:
      throw new Error("unknown action type");
  }
};
