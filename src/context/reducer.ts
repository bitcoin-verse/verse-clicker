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
import { SetErrorAction, setError } from "./reducers/error";
import { SetReturnDataAction, setReturnData } from "./reducers/returnData";
import {
  SetPurchaseAmountAction,
  setPurchaseAmount,
} from "./reducers/purchaseAmount";
import { SetSettingsAction, setSettings } from "./reducers/settings";

export type Action =
  | SetNetworkAction
  | SetPlayerAction
  | SetBuildingAction
  | SetLeaderboardAction
  | UpdateBuildingsAction
  | SetReturnDataAction
  | SetErrorAction
  | SetErrorAction
  | SetSettingsAction
  | SetPurchaseAmountAction
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
    case "SET_RETURN_DATA":
      return setReturnData(state, action.payload);
    case "SET_PURCHASE_AMOUNT":
      return setPurchaseAmount(state, action.payload);
    case "SET_SETTINGS":
      return setSettings(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
