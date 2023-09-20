import Building from "../../classes/Building";
import { State } from "../store";

export type BuyBuildingAction = {
  type: "BUY_BUILDING";
  payload: { name: string; qty: number };
};

const getCost = (amount: number, cost: number) => {
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
  console.log("buuybuilding reducre", payload);

  const building = state.buildings.find((b) => b.name === payload.name);

  if (!building) return state;

  const bulkCost = getCost(payload.qty, building.cost);

  // player doesn't have enuf cookies
  if (state.player.cookies < bulkCost) return state;
  /* 
  player.cookies = player.cookies - bulkCost;
  player.cookieStats.Spent = player.cookieStats.Spent + bulkCost; */
  //   building.buy(amount);

  //   const curIndex = state.buildings.findIndex((b) => b.name == payload.name);
  //   console.log(curIndex);

  //   if (curIndex === undefined) return state;

  //   let nextBuilding: Building;

  /*   if (curIndex + 1 <= state.buildings.length - 1) {
    if (state.buildings[curIndex + 1].locked) {
      nextBuilding = state.buildings[curIndex + 1];
      nextBuilding.locked = false;
    }
  } */

  const updatedBuildings = state.buildings.reduce(
    (previousValue, currentBuilding, currentIndex) => {
      if (currentBuilding.name === payload.name) {
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
      console.log(currentIndex);
      /*  if (curr.name === nextBuilding.name) {
      return [...prev, nextBuilding];
    } */

      return [...previousValue, currentBuilding];
    },
    [] as Building[],
  );

  console.log(updatedBuildings);
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
