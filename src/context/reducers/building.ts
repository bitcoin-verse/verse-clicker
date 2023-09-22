import Building from "../../classes/Building";
import Upgrade from "../../classes/Upgrade";
import { getBuildingsCost } from "../../helpers/buildingHelpers";
import { State } from "../store";

export type BuyBuildingAction = {
  type: "BUY_BUILDING";
  payload: { name: string; qty: number };
};

export const buyBuilding = (
  state: State,
  payload: BuyBuildingAction["payload"],
): State => {
  const building = state.buildings.find((b) => b.name === payload.name);

  if (!building) return state;

  const bulkCost = getBuildingsCost(payload.qty, building.cost);

  // player doesn't have enough cookies
  if (state.player.cookies < bulkCost) return state;

  let buildingIndex = 0;

  const updatedBuildings = state.buildings.reduce(
    (previousValue, currentBuilding, currentIndex) => {
      // update selected building
      if (currentBuilding.name === payload.name) {
        buildingIndex = currentIndex;
        return [
          ...previousValue,
          {
            ...currentBuilding,
            amount: currentBuilding.amount + payload.qty,
            cost: Math.round(
              currentBuilding.cost * Math.pow(1.15, payload.qty),
            ),
          },
        ];
      }

      // unlock next building if it's locked
      if (currentIndex - 1 === buildingIndex && currentBuilding.locked) {
        return [...previousValue, { ...currentBuilding, locked: false }];
      }

      return [...previousValue, currentBuilding];
    },
    [] as Building[],
  );

  return {
    ...state,
    settings: {
      ...state.settings,
      recalculateCPS: true,
    },
    player: {
      ...state.player,
      cookies: state.player.cookies - bulkCost,
      cookieStats: {
        ...state.player.cookieStats,
        Spent: state.player.cookieStats.Spent + bulkCost,
      },
    },
    buildings: updatedBuildings,
  };
};

export type BuyUpgradeAction = {
  type: "BUY_UPGRADE";
  payload: { buildingName: string; upgrade: Upgrade };
};

export const buyUpgrade = (
  state: State,
  payload: BuyUpgradeAction["payload"],
): State => {
  if (state.player.cookies < payload.upgrade.cost) return state;

  const newBuildings: Building[] = state.buildings.map((building) => {
    if (building.name === payload.buildingName) {
      return {
        ...building,
        upgrades: building.upgrades.map((upgrade) => {
          if (upgrade.name === payload.upgrade.name) {
            return { ...upgrade, owned: true };
          }

          return upgrade;
        }),
      };
    }

    return building;
  });

  return {
    ...state,
    buildings: newBuildings,
    settings: {
      ...state.settings,
      recalculateCPS: true,
    },
    player: {
      ...state.player,
      cookies: state.player.cookies - payload.upgrade.cost,
      cookieStats: {
        ...state.player.cookieStats,
        Spent: state.player.cookieStats.Spent - payload.upgrade.cost,
      },
    },
  };
};

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
