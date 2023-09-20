import { Reducer } from "react";
import { Action, State, initialState } from "./store";
import { clickCookie, spendCookie } from "./reducers/player";
import { gameSaved, loadSave } from "./reducers/saving";
import { buyBuilding } from "./reducers/building";

export const reducer: Reducer<State, Action> = (state, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "CLICK_COOKIE":
      return clickCookie(state);
    case "SPEND_COOKIE":
      return spendCookie(state, action.payload);

    case "BUY_BUILDING":
      return buyBuilding(state, action.payload);

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
      return {
        ...state,
        currentBuilding: action.payload,
      };
    default:
      throw new Error("unknown action type");
  }
};
