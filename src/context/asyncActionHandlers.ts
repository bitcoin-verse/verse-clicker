import { Reducer } from "react";
import { Action, State } from "./store";
import { AsyncActionHandlers } from "use-reducer-async";
import { AsyncActionSaveGame, saveGame } from "./actions/saveGame";
import { AsyncActionGetSaveGame, getSave } from "./actions/getSaveGame";

export type AsyncAction = AsyncActionSaveGame | AsyncActionGetSaveGame;

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  SAVE_GAME: saveGame,
  GET_SAVE: getSave,
};
