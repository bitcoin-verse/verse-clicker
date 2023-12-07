import type { IOptions, RecursivePartial } from "tsparticles-engine";
import { GameMode } from "../../context/reducers/network";

import { polygonConfig } from "./effects/polygon";
import { ethereumConfig } from "./effects/ethereum";
import { goerliConfig } from "./effects/goerli";
import { snow } from "./effects/christmas";

// handy place to get lots of configs... https://github.com/tsparticles/tsparticles/tree/main/utils/configs/src
export const createConfig = ({
  network,
  particlesNumber,
}: {
  network: GameMode;
  particlesNumber: number;
}): RecursivePartial<IOptions> => {
  switch (network) {
    case "Polygon":
      return {
        ...polygonConfig,
      };
    case "Christmas":
      return snow;
    case "Goerli":
      return goerliConfig;
    case "Ethereum":
    default:
      return {
        ...ethereumConfig,
        particles: {
          ...ethereumConfig.particles,
          number: {
            ...ethereumConfig.particles?.number,
            value: particlesNumber,
          },
        },
      };
  }
};
