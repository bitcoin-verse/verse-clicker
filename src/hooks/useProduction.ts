import { useEffect, useState } from "react";

import Building from "../classes/Building";

export const useProduction = (building: Building) => {
  const [production, setProduction] = useState(building.effect);

  useEffect(() => {
    let multiplier = 1;

    building.upgrades.forEach((upgrade) => {
      if (!upgrade.owned) return;
      if (upgrade.special === undefined) {
        multiplier *= 2;
      }
    });

    setProduction(multiplier * building.baseEffect);
  }, [building]);

  return { production };
};
