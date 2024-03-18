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
  let cost = getBuildingsCost(amount, baseCost);

  while (cost < cookies) {
    amount += 1;
    cost = getBuildingsCost(amount, baseCost);
  }

  return { amount: amount - 1, cost: getBuildingsCost(amount - 1, baseCost) };
};

export const isBuildingValid = (
  buildings: Building[],
  buildingName: string,
): boolean => {
  return buildings.some((building) => building.name === buildingName);
};
