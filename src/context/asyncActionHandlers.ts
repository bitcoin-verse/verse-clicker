import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";

import { State } from "./store";
import { Action } from "./reducer";

export type AsyncAction = {
  type: "SAVE_GAME";
  payload: { address: string };
};

const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  SAVE_GAME: () => async () => {
    console.log("save");
  },
};

export default asyncActionHandlers;
