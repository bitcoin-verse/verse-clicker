import { useMemo } from "react";
import { useTrackedState } from "../context/store";
import { ModifiedUpgrade } from "../components/Shop/UpgradesList/UpgradeButton";

const useUpgradesList = () => {
  const { buildings } = useTrackedState();

  const upgrades = useMemo(() => {
    return buildings.reduce((prev: ModifiedUpgrade[], building, bIndex) => {
      const buildingUpgrades = building.upgrades.reduce(
        (p, upgrade, uIndex) => {
          if (upgrade.owned) return p;
          if (building.amount >= upgrade.limit) {
            return [...p, { ...upgrade, bIndex, uIndex, bName: building.name }];
          }
          return p;
        },
        [] as ModifiedUpgrade[],
      );

      return [...prev, ...buildingUpgrades].sort((a, b) => a.cost - b.cost);
    }, []);
  }, [buildings]);

  return upgrades;
};

export default useUpgradesList;
