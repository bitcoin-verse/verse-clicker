import Building from "../../classes/Building";
import { State } from "../store";

export type BuyBuildingAction = {
  type: "BUY_BUILDING";
  payload: { name: string; qty: number };
};

export const getBuildingsCost = (amount: number, cost: number) => {
  let bulkCost = cost;
  let tempPrice = cost;
  for (let i = 0; i < amount - 1; i++) {
    bulkCost += Math.round((tempPrice *= 1.15));
  }
  return bulkCost;
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
