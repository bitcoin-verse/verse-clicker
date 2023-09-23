import Building from "../classes/Building";
import { getBuildingCount } from "./buildingHelpers";

export const calculateTotalCPS = (buildings: Building[]) => {
  const buildingCount = getBuildingCount(buildings);

  let CPS = 0;
  let aMPC = 1;

  buildings.forEach((building, index) => {
    if (building.locked || building.amount === 0) return;

    let multiplier = 1;

    console.log("building unlocked");
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
  /* const newBuildings: Building[] = buildings.map((building, index) => {
    if (index === 0) {
      aMPC = 1;
    }

    building.upgrades.forEach((upgrade) => {
      if (!upgrade.owned) return;

      if (upgrade.special === undefined) {
        multiplier *= 2;
        if (index === 0) {
          aMPC *= 2;
        }
      } else {
        // Special casing for all special types of upgrades
        // There may at some point be more than just cursors here, as theres special stuff for grandmas as well.

        if (index === 0) {
          const nonCursorBuildingCount = buildingCount - building.amount;
          building.specialCPS +=
            upgrade.special * nonCursorBuildingCount * building.amount;

          specialCPS +=
            upgrade.special * nonCursorBuildingCount * building.amount;
          aMPC += upgrade.special * nonCursorBuildingCount;
        }
      }
    });

    multiplier +=
      building.baseEffect * building.amount * multiplier + building.specialCPS;

    return building;
  }); */

  return { CPS, aMPC };
};
