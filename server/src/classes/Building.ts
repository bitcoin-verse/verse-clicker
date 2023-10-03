import Upgrade from "./Upgrade";

class Building {
  private _name: string;
  private _cost: number;
  private _amount: number;
  private _originalCost: number;
  private _multiplier: number;
  private _baseEffect: number;
  private _specialCPS: number;
  private _effect: number;
  private _upgrades: Upgrade[];
  private _locked: boolean;

  constructor(
    name: string,
    cost: number,
    effect: number,
    upgrades: Upgrade[],
    locked = true,
    amount = 0,
  ) {
    this._name = name;
    this._originalCost = cost;
    this._cost = cost;
    this._baseEffect = effect;
    this._upgrades = upgrades;

    this._locked = locked;
    this._amount = amount;

    this._multiplier = 1;
    this._specialCPS = 0;
    this._effect = 0;
  }

  get name() {
    return this._name;
  }

  get effect() {
    return this._effect;
  }

  get cost() {
    return this._cost;
  }

  get baseEffect() {
    return this._baseEffect;
  }

  get amount() {
    return this._amount;
  }

  get specialCPS() {
    return this._specialCPS;
  }

  get upgrades() {
    return this._upgrades;
  }

  get locked() {
    return this._locked;
  }

  get multiplier() {
    return this._multiplier;
  }

  getBuildingCost(amount: number) {
    let bulkCost = this._cost;
    let tempPrice = Number(this._cost);
    for (let i = 0; i < amount - 1; i++) {
      bulkCost += Math.round((tempPrice *= 1.15));
    }

    return bulkCost;
  }

  buyUpgrade(index: number) {
    this._upgrades[index].buy();
  }

  buy(amount: number) {
    this._amount += amount;
    this._cost = Math.round(this._cost * Math.pow(1.15, amount));
  }

  unlock() {
    this._locked = false;
  }
}

export default Building;
