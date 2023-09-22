import { Reducer } from "react";
import { createContainer } from "react-tracked";
import { useReducerAsync } from "use-reducer-async";
import { AsyncAction, asyncActionHandlers } from "./asyncActionHandlers";
import { Action, reducer } from "./reducer";
import Player from "../classes/Player";
import Building from "../classes/Building";
import buildings from "./buildings";

import { LeaderboardResponse } from "../api/leaderboard";

export type State = {
  save?: string;
  lastSave?: number;
  verseHolder: boolean;
  newCookies: number;
  loading: boolean;

  settings: {
    frameRate: number;
    recalculateCPS: boolean;
    key: string;
  };

  leaderboard: LeaderboardResponse;

  player: Player;
  buildings: Building[];
  currentBuilding: string;

  query: string;
  pending: boolean;
  error: Error | null;
};

export const initialState: State = {
  settings: {
    frameRate: 30,
    recalculateCPS: false,
    key: "cookieclicker",
  },

  leaderboard: [],
  verseHolder: false,
  newCookies: 0,

  // GAME
  player: new Player(),
  buildings,
  currentBuilding: buildings[0].name,

  // ASYNC
  pending: false,
  error: null,
  query: "",
  loading: true,
};

const useValue = () => {
  return useReducerAsync<Reducer<State, Action>, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers,
  );
};

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
