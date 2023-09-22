import { Reducer } from "react";
import { Action, State, initialState } from "./store";
import { clickCookie, earnCookie, spendCookie } from "./reducers/player";
import { gameSaved, loadSave } from "./reducers/saving";
import { buyBuilding, buyUpgrade, setBuilding } from "./reducers/building";
import { recalculateCPS } from "./reducers/recalculateCPS";
import { leaderboardSaved } from "./reducers/leaderboard";

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // Cookie reducers
    case "CLICK_COOKIE":
      return clickCookie(state);
    case "SPEND_COOKIE":
      return spendCookie(state, action.payload);
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
