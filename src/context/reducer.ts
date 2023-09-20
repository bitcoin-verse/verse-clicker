import { Reducer } from "react";
import { Action, State } from "./store";
import { clickCookie, spendCookie } from "./reducers/player";
import { gameSaved, loadSave } from "./reducers/saving";

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "CLICK_COOKIE":
      return clickCookie(state);
    case "SPEND_COOKIE":
      return spendCookie(state, action.payload);

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
    default:
      throw new Error("unknown action type");
  }
};
