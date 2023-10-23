import { State } from "../store";

export type SteErrorAction = { type: "SET_ERROR"; payload?: string };

export const setError = (
  state: State,
  payload: SteErrorAction["payload"],
): State => {
  return { ...state, error: payload };
};
