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

      console.log("save string", saveString);

      const response = await saveProgress(action.payload.address, saveString);

      console.log("game save", response);

      dispatch({
        type: "GAME_SAVED",
        payload: saveString,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
