import { Reducer } from "react";
import { State, initialState } from "./store";
import { SetPlayerDataAction, setPlayerData } from "./reducers/player";
import {
  SetBuildingAction,
  UpdateBuildingsAction,
  setBuilding,
  updateBuildings,
} from "./reducers/building";
import { SetLeaderboardAction, setLeaderboard } from "./reducers/leaderboard";

export type Action =
  | SetPlayerDataAction
  | SetBuildingAction
  | SetLeaderboardAction
  | UpdateBuildingsAction
  | { type: "RESET_GAME" };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "RESET_GAME":
      return initialState;
    case "SET_PLAYER_DATA":
      return setPlayerData(state, action.payload);
    case "SET_BUILDING":
      return setBuilding(state, action.payload);
    case "SET_LEADERBOARD":
      return setLeaderboard(state, action.payload);
    case "UPDATE_BUILDINGS":
      return updateBuildings(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
