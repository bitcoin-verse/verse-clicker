import { Reducer } from "react";
import { createContainer } from "react-tracked";
import { useReducerAsync } from "use-reducer-async";
import reducer, { Action } from "./reducer";
import asyncActionHandlers, { AsyncAction } from "./asyncActionHandlers";
import { Player } from "./reducers/player";

import buildings from "../buildings";
import { Leaderboard } from "./reducers/leaderboard";
import Building from "../classes/Building";
import { NetworkName } from "./reducers/network";
import { ReturnData } from "./reducers/returnData";

export type State = {
  isConnected: boolean;
  player: Player;
  leaderboard?: Leaderboard;
  verseHolder: boolean;

  buildings: Building[];
  currentBuilding?: string;
  returnData?: ReturnData;
  network: NetworkName;
  error?: string;
  purchaseAmount: number | "max";
};

export const initialState: State = {
  isConnected: false,
  verseHolder: false,
  currentBuilding: buildings.Ethereum[0].name,
  buildings: buildings.Ethereum,
  player: {
    cookies: 0,
    cpc: 0,
    cps: 0,
    stats: {
      Earned: 0,
      Clicked: 0,
      Spent: 0,
    },
    verseHolder: false,
  },
  network: "Ethereum",
  purchaseAmount: 1,
};

const useValue = () => {
  return useReducerAsync<Reducer<State, Action>, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers,
  );
};

export const {
  Provider: ContextProvider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
