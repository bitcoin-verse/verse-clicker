import type { IOptions, RecursivePartial } from "tsparticles-engine";
import { NetworkName } from "../../context/reducers/network";

import { polygonConfig } from "./effects/polygon";
import { ethereumConfig } from "./effects/ethereum";
import { goerliConfig } from "./effects/goerli";

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
