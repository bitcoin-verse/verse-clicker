import { State } from "../store";

type TBonus = "burn" | "scratcher" | "scratcher-mint";

export type BonusData = {
  bonusType: TBonus;
  bonusBase: number;
  bonusTotal: number;
  txHash: string;
  date: number;
};

export type SetBonusDataAction = {
  type: "SET_BONUS_DATA";
  payload?: BonusData;
};

export const setBonusData = (
  state: State,
  payload?: SetBonusDataAction["payload"],
): State => {
  if (!payload) return { ...state, bonusData: [] };
  return { ...state, bonusData: [...state.bonusData, payload] };
};
