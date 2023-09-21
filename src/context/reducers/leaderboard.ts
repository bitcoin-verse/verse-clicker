import { LeaderboardResponse } from "../../api/leaderboard";
import { State } from "../store";

export type LeaderboardSavedAction = {
  type: "LEADERBOARD_SAVED";
  payload: LeaderboardResponse;
};

export const leaderboardSaved = (
  state: State,
  payload: LeaderboardSavedAction["payload"],
): State => {
  return {
    ...state,
    leaderboard: payload,
  };
};
