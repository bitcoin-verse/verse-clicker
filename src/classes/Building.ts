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

  /*   buy(amount: number) {
    const player = game.player;
    if (player.spendCookies(this.getCost(amount)) == true) {
      this.amount += amount;
      this.cost = Math.round(this.cost * Math.pow(1.15, amount));
      game.settings.recalculateCPS = true;
      const curIndex = getBuildingIndexByName(this.name, game.buildings);

      if (!curIndex) return;
      if (curIndex + 1 <= game.buildings.length - 1) {
        const nextBuilding = game.buildings[curIndex + 1];
        if (nextBuilding.locked == true) {
          nextBuilding.locked = false;
          game.constructShop();
        }
      }
    }
  } */

  /* setCost() {
    this.cost = this.originalCost;
    for (let i = 0; i < this.amount; i++) {
      this.cost = Math.round(this.cost * 1.15);
    }
  } */

  /*   buyUpgrade(name: string) {
    const player = game.player;
    this.upgrades.forEach((upgrade) => {
      if (upgrade.name == name) {
        if (player.spendCookies(upgrade.cost) == true) {
          upgrade.owned = true;
          game.settings.recalculateCPS = true;
          return;
        }
      }
    });
  } */

  /* calculateEffectOfUpgrades() {
    const player = game.player;
    let multiplier = 1;
    const buildingCount = getBuildingCount(game.buildings);
    this.specialCPS = 0;
    if (this.name == "Cursor") {
      game.player.aMPC = 1;
    }
    this.upgrades.forEach((upgrade) => {
      if (upgrade.owned == true) {
        if (upgrade.special == undefined) {
          multiplier *= 2;
          if (this.name == "Cursor") {
            player.aMPC *= 2;
          }
        } else {
          // Special casing for all special types of upgrades
          // There may at some point be more than just cursors here, as theres special stuff for grandmas as well.
          switch (this.name) {
            case "Cursor":
              const nonCursorBuildingCount = buildingCount - this.amount;
              this.specialCPS +=
                upgrade.special * nonCursorBuildingCount * this.amount;
              player.aMPC += upgrade.special * nonCursorBuildingCount;
          }
        }
      }
    });
    return multiplier;
  } */

  /* getCPS() {
    this.multiplier = this.calculateEffectOfUpgrades();
    this.effect =
      this.baseEffect * this.amount * this.multiplier + this.specialCPS;
    return this.effect;
  } */

  /* getCost(amount: number) {
    let bulkCost = this.cost;
    let tempPrice = this.cost;
    for (let i = 0; i < amount - 1; i++) {
      bulkCost += Math.round((tempPrice *= 1.15));
    }
    return bulkCost;
  } */

  /* generateMenuButton() {
    return `<button onclick="game.updateShop('${this.name}');">${this.name}</button>`;
  } */

  /* generateBuyButtons() {
    const format = formatNumber;
    let html = '<div class="btnBuyGroup">';
    html += `<button onclick="game.buyBuilding('${
      this.name
    }', 1);">Buy x1</br><b>${format(this.cost)}</b></button>`;
    html += `<button onclick="game.buyBuilding('${
      this.name
    }', 5);">Buy x5</br><b>${format(this.getCost(5))}</b></button>`;
    html += `<button onclick="game.buyBuilding('${
      this.name
    }', 10);">Buy x10</br><b>${format(this.getCost(10))}</b></button>`;
    html += "</div>";
    return html;
  } */

  /* generateUpgradeButtons() {
    let html = "";
    let notMet = false;
    this.upgrades.forEach((upgrade) => {
      const format = formatNumber;
      if (upgrade.owned == false) {
        if (upgrade.requirementMet(this.amount)) {
          html += `<button class="upgBtn" onclick="game.buyUpgrade('${
            this.name
          }', '${upgrade.name}')"><b>${upgrade.name}</b></br>${
            upgrade.desc
          }</br><b>${format(upgrade.cost)}</b></button>`;
        } else {
          if (notMet == false) {
            notMet = true;
            html += `</br><button class="upgNext">Next upgrade in <b>${
              upgrade.limit - this.amount
            }</b> more ${this.name.toLowerCase()}(s)</button>`;
          }
        }
      }
    });
    return html;
  } */

  /* generateShopHTML() {
    const format = formatNumber;
    let singleEffect = this.baseEffect * this.multiplier;
    if (this.specialCPS > 0) {
      singleEffect += this.specialCPS / this.amount;
    }
    const html = `<b>${this.name}</b></br>You have <b>${
      this.amount
    }</b> ${this.name.toLowerCase()}(s).</br>Each ${this.name.toLowerCase()} produces <b>${format(
      singleEffect,
    )}</b> cookie(s).</br>All of your ${this.name.toLowerCase()}(s) combined produces <b>${format(
      this.effect,
    )}</b> cookie(s).</br>${this.generateBuyButtons()}</br>${this.generateUpgradeButtons()}`;
    return html;
  } */
}

export default Building;
