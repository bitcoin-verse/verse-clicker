import { State } from "../store";

export type TxData = {
  date: number;
  txHash: string;
  bonusBase: number;
  bonusTotal: number;
};

type BonusData = {
  burn: TxData[];
  scratcher: TxData[];
  scratcherMint: TxData[];
};

export type ReturnData = {
  seconds: number;
  cookies: number;
  bonus: BonusData;
};

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
