import { Reducer } from "react";

import { SetBonusDataAction, setBonusData } from "./reducers/bonusData";
import {
  SetBuildingAction,
  UpdateBuildingsAction,
  setBuilding,
  updateBuildings,
} from "./reducers/building";
import { SetCampaignAction, setCampaign } from "./reducers/campaign";
import { SetErrorAction, setError } from "./reducers/error";
import {
  SetLeaderboardAddressesAction,
  SetLeaderboardStatsAction,
  SetLeaderboardUpdated,
  setLeaderboardAddresses,
  setLeaderboardStats,
  setLeaderboardUpdated,
} from "./reducers/leaderboard";
import { SetGameModeAction, setNetwork } from "./reducers/network";
import { SetPlayerAction, setPlayer } from "./reducers/player";
import {
  SetPurchaseAmountAction,
  setPurchaseAmount,
} from "./reducers/purchaseAmount";
import { resetGame } from "./reducers/reset";
import { SetReturnDataAction, setReturnData } from "./reducers/returnData";
import { SetSettingsAction, setSettings } from "./reducers/settings";
import {
  AddSignDataElementAction,
  SetSignSignatureAction,
  SetSignUuidAction,
  addSignDataElement, // setSignSignature,
  // setSignUuid,
} from "./reducers/sign";
import { State } from "./store";

export type Action =
  | SetGameModeAction
  | SetPlayerAction
  | SetBuildingAction
  | SetLeaderboardStatsAction
  | SetLeaderboardAddressesAction
  | UpdateBuildingsAction
  | SetReturnDataAction
  | SetErrorAction
  | SetErrorAction
  | SetSettingsAction
  | SetPurchaseAmountAction
  | SetLeaderboardUpdated
  | SetBonusDataAction
  | SetCampaignAction
  | SetSignUuidAction
  | SetSignSignatureAction
  | AddSignDataElementAction
  | { type: "RESET_GAME" };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "RESET_GAME":
      return resetGame(state);
    case "SET_GAME_MODE":
      return setNetwork(state, action.payload);
    case "SET_PLAYER_DATA":
      return setPlayer(state, action.payload);
    case "SET_BUILDING":
      return setBuilding(state, action.payload);
    case "SET_LEADERBOARD_UPDATED":
      return setLeaderboardUpdated(state, action.payload);
    case "SET_LEADERBOARD_STATS":
      return setLeaderboardStats(state, action.payload);
    case "SET_LEADERBOARD_ADDRESSES":
      return setLeaderboardAddresses(state, action.payload);
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
    case "SET_BONUS_DATA":
      return setBonusData(state, action.payload);
    case "SET_CAMPAIGN":
      return setCampaign(state, action.payload);
    case "ADD_SIGN_DATA":
      return addSignDataElement(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
