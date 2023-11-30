import { State } from "../store";

export type LeaderboardStats = {
  Earned: number;
  Clicked: number;
  Spent: number;
}[];

type LeaderboardPlayers = {
  address: string;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}[];

export type LeaderboardEvent =
  | {
      timestamp: number;
      players: LeaderboardPlayers;
    }
  | LeaderboardPlayers;

export type SetLeaderboardUpdated = {
  type: "SET_LEADERBOARD_UPDATED";
  payload: number;
};

export type SetLeaderboardStatsAction = {
  type: "SET_LEADERBOARD_STATS";
  payload: LeaderboardStats;
};

export type SetLeaderboardAddressesAction = {
  type: "SET_LEADERBOARD_ADDRESSES";
  payload: string[];
};

export const setLeaderboardUpdated = (
  state: State,
  payload: SetLeaderboardUpdated["payload"],
): State => {
  return { ...state, leaderboardUpdated: payload };
};

export const setLeaderboardStats = (
  state: State,
  payload: LeaderboardStats,
): State => {
  return { ...state, leaderboardStats: payload };
};

export const setLeaderboardAddresses = (
  state: State,
  payload: string[],
): State => {
  if (payload.toString() === state.leaderboardAddresses.toString()) {
    return state;
  }

  return { ...state, leaderboardAddresses: payload };
};
