import { State } from "../store";

export type Leaderboard = {
  address: string;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}[];

export type SetLeaderboardAction = {
  type: "SET_LEADERBOARD";
  payload?: Leaderboard;
};

export const setLeaderboard = (
  state: State,
  payload: SetLeaderboardAction["payload"],
): State => {
  return { ...state, leaderboard: payload };
};
