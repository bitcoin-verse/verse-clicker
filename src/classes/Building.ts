import Upgrade from "./Upgrade";

class Building {
  name: string;
  cost: number;
  amount: number;
  originalCost: number;
  multiplier: number;
  baseEffect: number;
  specialCPS: number;
  effect: number;
  upgrades: Upgrade[];
  locked: boolean;
  image: string;

  constructor(
    name: string,
    cost: number,
    effect: number,
    upgrades: Upgrade[],
    locked = true,
    image: string,
  ) {
    this.image = image;
    this.name = name;
    this.amount = 0;
    this.originalCost = cost;
    this.cost = cost;
    this.multiplier = 1;
    this.baseEffect = effect;
    this.specialCPS = 0;
    this.effect = 0;
    this.upgrades = upgrades;
    this.locked = locked;
  }
}

export default Building;
