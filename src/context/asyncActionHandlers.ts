import { Reducer } from "react";
import { Action, State } from "./store";
import { AsyncActionHandlers } from "use-reducer-async";
import { getProgress, saveProgress } from "../api/progress";

type AsyncActionSaveGame = {
  type: "SAVE_GAME";
  payload: { address: string; progressBase64: string };
};

type AsyncActionGetSaveGamve = {
  type: "GET_SAVE";
  payload: string;
};

export type AsyncAction = AsyncActionSaveGame | AsyncActionGetSaveGamve;

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  SAVE_GAME:
    ({ dispatch }) =>
    async (action) => {
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
    },

  GET_SAVE:
    ({ dispatch }) =>
    async (action) => {
      try {
        dispatch({ type: "STARTED" });

        const response = await getProgress(action.payload);

        if (!response) throw new Error("Error getting response");

        dispatch({
          type: "GAME_SAVED",
          payload: response,
        });
      } catch (error) {
        dispatch({ type: "FAILED", error: error as unknown as Error });
      }
    },
};
