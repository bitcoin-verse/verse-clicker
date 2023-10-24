import { State } from "../store";

export type SetPurchaseAmountAction = {
  type: "SET_PURCHASE_AMOUNT";
  payload: number | "max";
};

export const setPurchaseAmount = (
  state: State,
  payload: SetPurchaseAmountAction["payload"],
): State => {
  return { ...state, purchaseAmount: payload };
};
