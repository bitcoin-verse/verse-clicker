import type { IOptions, RecursivePartial } from "tsparticles-engine";
import { NetworkName } from "../../context/reducers/network";

import { polygonConfig } from "./effects/polygon";
import { ethereumConfig } from "./effects/ethereum";

export const createConfig = ({
  network,
  particlesNumber,
}: {
  network: NetworkName;
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
            value: particlesNumber,
          },
        },
      };
    case "Goerli":
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
