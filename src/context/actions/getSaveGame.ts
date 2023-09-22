import { getProgress } from "../../api/progress";
import { magic } from "../../helpers/base64";
import { Action } from "../reducer";
import { State } from "../store";

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

      dispatch({ type: "SET_LOADING", payload: true });
      const { progressBase64, lastUpdatedTimestamp, isVerseHolder } =
        await getProgress(action.payload);

      if (!progressBase64) throw new Error("Error getting response");

      const save = magic(progressBase64);

      if (save === false) throw new Error("Save is broken");

      dispatch({
        type: "GAME_LOADED",
        payload: {
          base64: progressBase64,
          lastSave: lastUpdatedTimestamp,
          verseHolder: isVerseHolder,
        },
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
