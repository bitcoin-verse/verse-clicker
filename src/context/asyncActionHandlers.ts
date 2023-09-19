import { Reducer } from "react";
import { Action, State } from "./store";
import { AsyncActionHandlers } from "use-reducer-async";

type AsyncActionSaveGame = { type: "SAVE_GAME"; save: string };

export type AsyncAction = AsyncActionSaveGame;

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  SAVE_GAME:
    ({ dispatch }) =>
    async (action) => {
      try {
        dispatch({ type: "STARTED" });

        console.log(action);
        // some async action
        // const response = await axios(action)....

        dispatch({ type: "GAME_SAVED", save: "" });
      } catch (error) {
        dispatch({ type: "FAILED", error: error as unknown as Error });
      }
    },
};
