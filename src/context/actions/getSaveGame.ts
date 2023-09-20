import { getProgress } from "../../api/progress";
import { Action, State } from "../store";

export type AsyncActionGetSaveGame = {
  type: "GET_SAVE";
  payload: string;
};

export const getSave = ({
  dispatch,
}: {
  dispatch: React.Dispatch<Action | AsyncActionGetSaveGame>;
  getState: () => State;
  signal: AbortSignal;
}) => {
  return async (action: AsyncActionGetSaveGame) => {
    try {
      dispatch({ type: "STARTED" });

      const response = await getProgress(action.payload);

      console.log("get save", response);
      if (!response) throw new Error("Error getting response");

      dispatch({
        type: "GAME_SAVED",
        payload: response,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
