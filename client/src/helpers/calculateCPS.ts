import Building from "../classes/Building";
import { getBuildingCount } from "./buildingHelpers";

export const calculateTotalCPS = (buildings: Building[]) => {
  const buildingCount = getBuildingCount(buildings);

  let CPS = 0;
  let aMPC = 1;

  buildings.forEach((building, index) => {
    if (building.locked || building.amount === 0) return;

    let multiplier = 1;

    building.upgrades.forEach((upgrade) => {
      if (!upgrade.owned) return;
      if (index === 0) {
        aMPC *= 2;
      }

      if (upgrade.special === undefined) {
        multiplier *= 2;
        return;
      }

      if (index === 0) {
        const nonCursorBuildingCount = buildingCount - building.amount;
        aMPC += upgrade.special * nonCursorBuildingCount;
      }
    });

    CPS +=
      building.baseEffect * building.amount * multiplier + building.specialCPS;
  }, []);

  return { CPS, aMPC };
};
