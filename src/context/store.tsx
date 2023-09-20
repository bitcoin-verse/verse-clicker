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

  // ASYNC ACTION STATES
  | { type: "STARTED" }
  | { type: "FAILED"; error: Error }
  | { type: "QUERY_CHANGED"; query: string };

const initialState: State = {
  settings: {
    frameRate: 30,
    recalculateCPS: true,
    key: "cookieclicker",
  },

  // GAME
  player: new Player(),

  // ASYNC
  pending: false,
  error: null,
  query: "",
};

const useValue = () => {
  return useReducerAsync<Reducer<State, Action>, AsyncAction>(
    reducer,
    initialState,
    asyncActionHandlers,
  );
};

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
