import { Reducer } from "react";
import { State } from "./store";
import { AsyncActionHandlers } from "use-reducer-async";
import { AsyncActionSaveGame, saveGame } from "./actions/saveGame";
import { AsyncActionGetSaveGame, getSave } from "./actions/getSaveGame";
import {
  AsyncActionGetLeaderboard,
  getLeaderboard,
} from "./actions/getLeaderboard";
import { Action } from "./reducer";

export type AsyncAction =
  | AsyncActionSaveGame
  | AsyncActionGetSaveGame
  | AsyncActionGetLeaderboard;

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  SAVE_GAME: saveGame,
  GET_SAVE: getSave,
  GET_LEADERBOARD: getLeaderboard,
};
