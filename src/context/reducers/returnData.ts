import { State } from "../store";

type BonusBurnTx = {
  date: number;
  txHash: string;
  burnAmount: number;
  bonusAmount: number;
};
type ScrachClaimTx = {
  date: number;
  txHash: string;
  prizeAmount: number;
  bonusAmount: number;
};

export type ReturnData = {
  seconds: number;
  cookies: number;
  bonusBurnTxs: BonusBurnTx[];
  scratchCLaimTxs: ScrachClaimTx[];
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
