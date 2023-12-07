import Building from "../classes/Building";
import Upgrade from "../classes/Upgrade";

import ethBuildings from "./ethereum.json";
import gethBuildings from "./goerli.json";
import polyBuildings from "./polygon.json";
import christmasBuildings from "./christmas.json";

type BuildingJson = {
  name: string;
  desc?: string;
  cost: number;
  amount: number;
  originalCost: number;
  multiplier: number;
  baseEffect: number;
  specialCPS: number;
  effect: number;
  locked: boolean;
  image: string;
  upgrades: {
    name: string;
    cost: number;
    desc: string;
    limit: number;
    owned: boolean;
    special?: number;
  }[];
};

const generateBuildingsFromJson = (json: BuildingJson[]) => {
  return json.map(
    (b) =>
      new Building(
        b.name,
        b.desc || b.name,
        b.cost,
        b.baseEffect,
        b.upgrades.map(
          (u) => new Upgrade(u.name, u.cost, u.desc, u.limit, u.special),
        ),
        b.locked,
        b.image,
      ),
  );
};

export default {
  Ethereum: generateBuildingsFromJson(ethBuildings),
  Polygon: generateBuildingsFromJson(polyBuildings),
  Goerli: generateBuildingsFromJson(gethBuildings),
  Christmas: generateBuildingsFromJson(christmasBuildings),
};
