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
        particles: {
          ...polygonConfig.particles,
          number: {
            ...polygonConfig.particles?.number,
            value: particlesNumber * 10,
          },
        },
      };
    case "Christmas":
      return {
        ...snow,
        particles: {
          ...snow.particles,
          number: {
            ...snow.particles?.number,
            value: (particlesNumber || 1) * 10,
          },
        },
      };
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
