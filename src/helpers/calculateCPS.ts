import Building from "../classes/Building";
import Player from "../classes/Player";

export const calculateTotalCPS = (player: Player, buildings: Building[]) => {
  const buildingCount = buildings.length;

  let CPS = 0;

  buildings.forEach((building, index) => {
    let multiplier = 1;

    if (index === 0) {
      player.aMPC = 1;
    }

    building.upgrades.forEach((upgrade) => {
      if (!upgrade.owned) return;

      if (upgrade.special === undefined) {
        multiplier *= 2;
        if (index === 0) {
          player.aMPC *= 2;
        }
      } else {
        // Special casing for all special types of upgrades
        // There may at some point be more than just cursors here, as theres special stuff for grandmas as well.

        if (index === 0) {
          const nonCursorBuildingCount = buildingCount - building.amount;
          building.specialCPS +=
            upgrade.special * nonCursorBuildingCount * building.amount;
          player.aMPC += upgrade.special * nonCursorBuildingCount;
        }
      }
    });

    CPS +=
      building.baseEffect * building.amount * multiplier + building.specialCPS;
  });

  return CPS;
};
