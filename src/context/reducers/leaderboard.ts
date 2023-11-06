import { State } from "../store";

export type LeaderboardStats = {
  Earned: number;
  Clicked: number;
  Spent: number;
}[];

export type LeaderboardEvent = {
  address: string;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}[];

export type SetLeaderboardStatsAction = {
  type: "SET_LEADERBOARD_STATS";
  payload: LeaderboardStats;
};

export type SetLeaderboardAddressesAction = {
  type: "SET_LEADERBOARD_ADDRESSES";
  payload: string[];
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
