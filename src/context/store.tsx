import { Reducer } from "react";
import { createContainer } from "react-tracked";
import { useReducerAsync } from "use-reducer-async";
import { AsyncAction, asyncActionHandlers } from "./asyncActionHandlers";
import { reducer } from "./reducer";

export type State = {
  save: string;

  cookies: number;
  query: string;
  pending: boolean;
  error: Error | null;
};

export type Action =
  | { type: "GAME_SAVED"; save: string }
  | { type: "COOKIE_CLICKED" }
  | { type: "STARTED" }
  | { type: "FAILED"; error: Error }
  | { type: "QUERY_CHANGED"; query: string };

const initialState: State = {
  cookies: 0,
  query: "",
  save: "",
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
