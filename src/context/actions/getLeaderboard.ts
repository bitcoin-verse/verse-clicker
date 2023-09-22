import { fetchLeaderboard } from "../../api/leaderboard";
import { Action } from "../reducer";
import { State } from "../store";

export type AsyncActionGetLeaderboard = {
  type: "GET_LEADERBOARD";
};

export const getLeaderboard = ({
  dispatch,
}: {
  dispatch: React.Dispatch<Action | AsyncActionGetLeaderboard>;
  getState: () => State;
  signal: AbortSignal;
}) => {
  return async () => {
    try {
      dispatch({ type: "STARTED" });
      const data = await fetchLeaderboard(10, ["earned"]);

      dispatch({ type: "LEADERBOARD_SAVED", payload: data });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
