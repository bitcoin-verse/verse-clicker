import { Reducer } from "react";
import { State, initialState } from "./store";
import { SetPlayerAction, setPlayer } from "./reducers/player";
import {
  SetBuildingAction,
  UpdateBuildingsAction,
  setBuilding,
  updateBuildings,
} from "./reducers/building";
import { SetLeaderboardAction, setLeaderboard } from "./reducers/leaderboard";
import { SetNetworkAction, setNetwork } from "./reducers/network";
import { SteErrorAction, setError } from "./reducers/error";

export type Action =
  | SetNetworkAction
  | SetPlayerAction
  | SetBuildingAction
  | SetLeaderboardAction
  | UpdateBuildingsAction
  | SteErrorAction
  | { type: "RESET_GAME" };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "RESET_GAME":
      return initialState;
    case "SET_NETWORK":
      return setNetwork(state, action.payload);
    case "SET_PLAYER_DATA":
      return setPlayer(state, action.payload);
    case "SET_BUILDING":
      return setBuilding(state, action.payload);
    case "SET_LEADERBOARD":
      return setLeaderboard(state, action.payload);
    case "UPDATE_BUILDINGS":
      return updateBuildings(state, action.payload);
    case "SET_ERROR":
      return setError(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
