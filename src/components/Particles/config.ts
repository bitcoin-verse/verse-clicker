import { ISourceOptions } from "@tsparticles/engine";

import { GameMode } from "../../context/reducers/network";
import { ethereumConfig } from "./effects/ethereum";
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

    case "Sepolia":
      return sepoliaConfig;

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
