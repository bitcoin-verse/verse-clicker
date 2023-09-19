import { Reducer } from "react";
import { createContainer } from "react-tracked";
import { useReducerAsync } from "use-reducer-async";
import { AsyncAction, asyncActionHandlers } from "./asyncActionHandlers";
import { reducer } from "./reducer";
import Player from "../classes/Player";

export type State = {
  save?: string;

  settings: {
    frameRate: number;
    recalculateCPS: boolean;
    key: string;
  };

  player: Player;

  query: string;
  pending: boolean;
  error: Error | null;
};

export type Action =
  | { type: "GAME_SAVED"; payload: string }
  | { type: "CLICK_COOKIE" }
  | { type: "SPEND_COOKIE"; payload: number }
  | { type: "STARTED" }
  | { type: "FAILED"; error: Error }
  | { type: "QUERY_CHANGED"; query: string };

const initialState: State = {
  query: "",

  settings: {
    frameRate: 30,
    recalculateCPS: true,
    key: "cookieclicker",
  },

  // GAME
  player: new Player(),
  pending: false,
  error: null,
};

const useValue = () =>
  useReducerAsync<Reducer<State, Action>, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers,
  );

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
