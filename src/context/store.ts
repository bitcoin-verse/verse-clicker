import { Reducer } from "react";
import { createContainer } from "react-tracked";
import { useReducerAsync } from "use-reducer-async";
import reducer, { Action } from "./reducer";
import asyncActionHandlers, { AsyncAction } from "./asyncActionHandlers";
import { Player } from "./reducers/player";

import buildings from "../buildings";
import { Leadeerboard } from "./reducers/leaderboard";
import Building from "../classes/Building";
import { NetworkName } from "./reducers/network";

export type State = {
  isConnected: boolean;
  player: Player;
  leaderboard?: Leadeerboard;
  verseHolder: boolean;

  buildings: Building[];
  currentBuilding?: string;
  network: NetworkName;
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
