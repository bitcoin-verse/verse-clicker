import buildings from "../../buildings";
import { State } from "../store";

export type SetBuildingAction = { type: "SET_BUILDING"; payload: string };

export const setBuilding = (
  state: State,
  payload: SetBuildingAction["payload"],
): State => {
  return {
    ...state,
    currentBuilding: payload,
  };
};

export type BuildingData = {
  locked: boolean;
  cost: number;
  amount: number;
  multiplier: number;
  upgrades: boolean[];
};

export type UpdateBuildingsAction = {
  type: "UPDATE_BUILDINGS";
  payload: BuildingData[];
};

export const updateBuildings = (
  state: State,
  payload: UpdateBuildingsAction["payload"],
): State => {
  const bldngs = buildings[state.gameMode].map((b, i) => {
    return {
      ...b,
      amount: payload[i].amount,
      cost: payload[i].cost,
      locked: payload[i].locked,
      multiplier: payload[i].multiplier,
      upgrades: b.upgrades.map((u, ui) => ({
        ...u,
        owned: payload[i].upgrades[ui],
      })),
    };
  });

  return { ...state, buildings: bldngs };
};
