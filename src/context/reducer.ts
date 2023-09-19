import { Reducer } from "react";
import { Action, State } from "./store";

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "COOKIE_CLICKED":
      return {
        ...state,
        cookies: state.cookies + 1,
      };

    // ASCYNC ACTION STATES
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
