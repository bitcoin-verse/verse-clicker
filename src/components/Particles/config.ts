import { ISourceOptions } from "@tsparticles/engine";

import { GameMode } from "../../context/reducers/network";
import { snow } from "./effects/christmas";
import { ethereumConfig } from "./effects/ethereum";
import { goerliConfig } from "./effects/goerli";
import { lunarNewYear } from "./effects/lunarnewyear";
import { polygonConfig } from "./effects/polygon";
import { sepoliaConfig } from "./effects/sepolia";

// handy place to get lots of configs... https://github.com/tsparticles/tsparticles/tree/main/utils/configs/src
export const createConfig = ({
  network,
  particlesNumber,
}: {
  network: GameMode;
  particlesNumber: number;
}): ISourceOptions => {
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
    case "LunarNewYear":
      return lunarNewYear;
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
    case "Sepolia":
      return sepoliaConfig;
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
