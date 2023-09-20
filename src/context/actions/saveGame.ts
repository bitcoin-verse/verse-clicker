import { saveProgress } from "../../api/progress";
import generateSaveString from "../../helpers/generateSaveString";
import { Action, State } from "../store";

export type AsyncActionSaveGame = {
  type: "SAVE_GAME";
  payload: { address: string };
};

export const saveGame = ({
  dispatch,
  getState,
}: {
  dispatch: React.Dispatch<Action | AsyncActionSaveGame>;
  getState: () => State;
  signal: AbortSignal;
}) => {
  return async (action: AsyncActionSaveGame) => {
    try {
      dispatch({ type: "STARTED" });

      const state = getState();

      const saveString = generateSaveString(state.player, state.buildings);

      const { progressBase64 } = await saveProgress(
        action.payload.address,
        saveString,
      );

      dispatch({
        type: "GAME_SAVED",
        payload: progressBase64,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
