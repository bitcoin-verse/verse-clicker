import { Dispatch, Reducer, useCallback, useEffect, useReducer } from "react";
import { createContainer } from "react-tracked";

import buildings from "../buildings";
import Building from "../classes/Building";
import { CampaignInfo, CampaignPhase } from "../hooks/useCampaignInfo";
import reducer, { Action } from "./reducer";
import { BonusData } from "./reducers/bonusData";
import { LeaderboardStats } from "./reducers/leaderboard";
import { GameMode } from "./reducers/network";
import { Player } from "./reducers/player";
import { ReturnData } from "./reducers/returnData";

const storageKey = "verse-clicker";

export type State = {
  isConnected: boolean;
  player: Player;
  verseHolder: boolean;

  buildings: Building[];
  currentBuilding?: string;
  returnData?: ReturnData;
  gameMode: GameMode;
  error?: string;
  purchaseAmount: number | "max";
  settings: {
    sound: boolean;
  };
  isWallet: boolean;

  leaderboardAddresses: string[];
  leaderboardStats: LeaderboardStats;
  leaderboardUpdated?: number;
  bonusData?: BonusData;

  campaign: {
    campaignInfo?: CampaignInfo;
    campaignPhase?: CampaignPhase;
    showCampaignBanner?: boolean;
  };
};

const search = new URLSearchParams(window.location.search);
const isWallet = search.get("origin") === "wallet";
const gampaign = search.get("campaign");

const gameModes: Record<string, GameMode> = {
  christmas: "Christmas",
  ethereum: "Ethereum",
  polygon: "Polygon",
  goerli: "Goerli",
  sepolia: "Sepolia",
  lunarnewyear: "LunarNewYear",
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
    isFarming: false,
    isStaking: false,
    isGuildMember: false,
    clickBase: 1,
    productionBase: 1,
  },
  gameMode:
    gampaign && gameModes?.[gampaign.toLowerCase()]
      ? gameModes[gampaign.replace("-", "").toLowerCase()]
      : "Ethereum",
  purchaseAmount: 1,
  settings: { sound: true },
  isWallet,
  leaderboardAddresses: [],
  leaderboardStats: [],
  campaign: {},
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
