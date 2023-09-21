import { fetchLeaderboard } from "../../api/leaderboard";
import { Action, State } from "../store";

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
  return async (action: AsyncActionGetLeaderboard) => {
    try {
      dispatch({ type: "STARTED" });
      console.log(action);
      const data = await fetchLeaderboard(10, ["earned"]);
      console.log(data);

      //   dispatch({ type: "LEADERBOARD_SAVED", payload: data });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
