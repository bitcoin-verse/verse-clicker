import Building from "./Building";

class Player {
  private _address: string;
  private _cookies: number;

  // stats
  private _Earned: number;
  private _Spent: number;
  private _Clicked: number;

  private _aMPF: number;
  private _aMPC: number;

  private _buildings: Building[];

  private _verseHolder: boolean;

  constructor(
    address: string,
    buildings: Building[],
    saveData?: {
      cookies?: number;
      Earned?: number;
      Spent?: number;
      Clicked?: number;
      aMPF?: number;
      aMPC?: number;
      verseHolder?: boolean;
    } | null,
  ) {
    this._cookies = saveData?.cookies || 0;
    this._Earned = saveData?.Earned || 0;
    this._Spent = saveData?.Spent || 0;
    this._Clicked = saveData?.Clicked || 0;
    this._aMPF = saveData?.aMPF || 0;
    this._aMPC = saveData?.aMPC || 1;

    this._buildings = buildings;
    this._address = address;
    this._verseHolder = saveData?.verseHolder ?? false;
  }

  get address() {
    return this._address;
  }

  get cookies() {
    return this._cookies;
  }

  get aMPF() {
    return this._aMPF;
  }

  get aMPC() {
    return this._aMPC;
  }

  get buildings() {
    return this._buildings;
  }

  get cookieStats() {
    return {
      Earned: this._Earned,
      Spent: this._Spent,
      Clicked: this._Clicked,
    };
  }

  get verseHolder() {
    return this._verseHolder;
  }

  setVerseHolding(holding: boolean) {
    this._verseHolder = holding;
  }

  getBuildingByIndex(index: number) {
    return this._buildings[index];
  }

  getBuildingCount() {
    return this._buildings.reduce((prev, curr) => prev + curr.amount, 0);
  }

  clickCookie() {
    this._cookies =
      this._cookies + (this.verseHolder ? this.aMPC * 10 : this.aMPC);
    this._Earned =
      this._Earned + (this.verseHolder ? this.aMPC * 10 : this.aMPC);
    this._Clicked = this._Clicked + 1;
  }

  earnCookies(val: number) {
    this._cookies = this._cookies + val;
    this._Earned = this._Earned + val;
  }

  addBonus(val: number) {
    this._cookies = this._cookies + val;
  }

  spendCookies(val: number) {
    this._cookies -= val;
    this._Spent += val;
  }

  private _getTotalCPS() {
    const buildingCount = this.getBuildingCount();
    let CPS = 0;
    let CPC = 1;

    this.buildings.forEach((building, bIndex) => {
      if (building.locked || building.amount === 0) return;
      let multiplier = 1;

      building.upgrades.forEach((upgrade) => {
        if (!upgrade.owned) return;

        if (bIndex === 0) {
          CPC *= 2;
        }

        if (upgrade.special === undefined) {
          multiplier *= 2;
          return;
        }

        if (bIndex === 0) {
          const nonCursorBuildingCount = buildingCount - building.amount;
          CPC += upgrade.special * nonCursorBuildingCount;
        }
      });

      CPS +=
        building.baseEffect * building.amount * multiplier +
        building.specialCPS;
    });

    return { CPS, CPC };
  }

  recalculateCPS() {
    const { CPS, CPC } = this._getTotalCPS();

    this._aMPF = CPS;
    this._aMPC = CPC;
  }

  buyBuilding(index: number, amount: number) {
    const bulkCost = this._buildings[index].getBuildingCost(amount);

    if (this._cookies < bulkCost) {
      return;
    }

    this._buildings[index].buy(amount);
    this.spendCookies(bulkCost);
    this.recalculateCPS();

    if (this._buildings[index + 1]) {
      this._buildings[index + 1].unlock();
    }
  }

  buyUpgrade(buildingIndex: number, upgradeIndex: number) {
    const building = this._buildings[buildingIndex];
    const upgrade = this._buildings[buildingIndex].upgrades[upgradeIndex];

    if (this._cookies < upgrade.cost) {
      return;
    }

    if (building.amount < upgrade.limit) {
      return;
    }

    upgrade.buy();
    this.spendCookies(upgrade.cost);
    this.recalculateCPS();
  }

  getBuildingsData() {
    return this._buildings.map((building) => ({
      locked: building.locked,
      cost: building.cost,
      amount: building.amount,
      multiplier: building.multiplier,
      upgrades: building.upgrades.map((upgrade) => upgrade.owned),
    }));
  }
}

export default Player;
