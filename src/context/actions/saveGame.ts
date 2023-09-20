import { saveProgress } from "../../api/progress";
import { Action, State } from "../store";

export type AsyncActionSaveGame = {
  type: "SAVE_GAME";
  payload: { address: string; progressBase64: string };
};

export const saveGame = ({
  dispatch,
}: {
  dispatch: React.Dispatch<Action | AsyncActionSaveGame>;
  getState: () => State;
  signal: AbortSignal;
}) => {
  return async (action: AsyncActionSaveGame) => {
    try {
      dispatch({ type: "STARTED" });

      const response = await saveProgress(
        action.payload.address,
        action.payload.progressBase64,
      );

      console.log("game save", response);
      dispatch({
        type: "GAME_SAVED",
        payload: action.payload.progressBase64,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
