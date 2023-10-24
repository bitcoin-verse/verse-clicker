import Building from "../classes/Building";

export const getBuildingsCost = (amount: number, cost: number): number => {
  let bulkCost = cost;
  let tempPrice = cost;
  for (let i = 0; i < amount - 1; i++) {
    bulkCost += Math.round((tempPrice *= 1.15));
  }

  return bulkCost;
};

export const getBuildingCount = (buildings: Building[]): number => {
  return buildings.reduce((prev, curr) => prev + curr.amount, 0);
};

export const getMaxBuilding = (cookies: number, baseCost: number) => {
  let amount = 1;
  let cost = getBuildingsCost(1, baseCost);

  while (cost < cookies) {
    amount += 1;
    cost = getBuildingsCost(amount, baseCost);
  }

  return { amount, cost };
};
