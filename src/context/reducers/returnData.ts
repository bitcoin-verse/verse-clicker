import { State } from "../store";

export type ReturnData = { seconds: number; cookies: number };

export type SetReturnDataAction = {
  type: "SET_RETURN_DATA";
  payload?: ReturnData;
};

export const setReturnData = (
  state: State,
  payload: SetReturnDataAction["payload"],
): State => {
  return { ...state, returnData: payload };
};
