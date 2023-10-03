import { State } from "../store";

export type Leadeerboard = {
  address: string;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}[];

export type SetLeaderboardAction = {
  type: "SET_LEADERBOARD";
  payload?: Leadeerboard;
};

export const setLeaderboard = (
  state: State,
  payload: SetLeaderboardAction["payload"],
): State => {
  return { ...state, leaderboard: payload };
};
