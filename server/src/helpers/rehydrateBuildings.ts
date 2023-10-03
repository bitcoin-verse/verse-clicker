import Building from "../classes/Building";
import PlayerClass from "../database/interfaces/PlayerInterface";

const rehydrateBuildings = (
  buildings: Building[],
  data: PlayerClass["buildings"],
) => {
  return buildings.map((b, i) => {
    const newBuildingData = data[i];

    const cost =
      newBuildingData.amount !== 0
        ? Math.round(b.cost * Math.pow(1.15, newBuildingData.amount))
        : b.cost;

    b.upgrades.forEach((u, i) => {
      if (newBuildingData.upgrades[i]) {
        u.buy();
      }
    });

    return new Building(
      b.name,
      cost,
      b.baseEffect,
      b.upgrades,
      newBuildingData.locked,
      newBuildingData.amount,
    );
  });
};

export default rehydrateBuildings;
