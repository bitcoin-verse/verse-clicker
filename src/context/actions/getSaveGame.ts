import { getProgress } from "../../api/progress";
import { magic } from "../../helpers/base64";
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

      const { progressBase64 } = await getProgress(action.payload);

      if (!progressBase64) throw new Error("Error getting response");

      const save = magic(progressBase64);

      if (save === false) throw new Error("Save is broken");

      dispatch({
        type: "GAME_LOADED",
        payload: progressBase64,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
