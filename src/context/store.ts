import { Dispatch, Reducer, useCallback, useEffect, useReducer } from "react";
import { createContainer } from "react-tracked";
import reducer, { Action } from "./reducer";
import { Player } from "./reducers/player";

import buildings from "../buildings";
import { LeaderboardStats } from "./reducers/leaderboard";
import Building from "../classes/Building";
import { NetworkName } from "./reducers/network";
import { ReturnData } from "./reducers/returnData";

const storageKey = "verse-clicker";

export type State = {
  isConnected: boolean;
  player: Player;
  verseHolder: boolean;

  buildings: Building[];
  currentBuilding?: string;
  returnData?: ReturnData;
  network: NetworkName;
  error?: string;
  purchaseAmount: number | "max";
  settings: {
    sound: boolean;
  };
  isWallet: boolean;

  leaderboardAddresses: string[];
  leaderboardStats: LeaderboardStats;
  leaderboardUpdated?: number;
};

const search = new URLSearchParams(window.location.search);
const isWallet = search.get("origin") === "wallet";

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
    isFarming: false,
    isStaking: false,
  },
  network: "Ethereum",
  purchaseAmount: 1,
  settings: { sound: true },
  isWallet,
  leaderboardAddresses: [],
  leaderboardStats: [],
};

const init = (): State => {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) throw new Error("localstorage not found");

    const persistedState = JSON.parse(stored);
    // validate preloadedState if necessary

    return { ...initialState, ...persistedState };
  } catch (e) {
    // ignore
  }

  return initialState;
};

const useValue = (): readonly [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer<Reducer<State, Action>, State>(
    reducer,
    initialState,
    init,
  );

  useEffect(() => {
    const persistedState = { settings: state.settings };
    window.localStorage.setItem(storageKey, JSON.stringify(persistedState));
  }, [state]);

  /* useEffect(() => {
    console.log("state", state);
  }, [state]); */

  const dispatchWithLogging = useCallback((action: Action) => {
    // console.log("action", action);
    dispatch(action);
  }, []);

  return [state, dispatchWithLogging];
};

export const {
  Provider: ContextProvider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
