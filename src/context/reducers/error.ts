import { State } from "../store";

export type SetErrorAction = { type: "SET_ERROR"; payload?: string };

export const setError = (
  state: State,
  payload: SetErrorAction["payload"],
): State => {
  return { ...state, error: payload };
};
