import {
  VERSE_BURN_ENGINE_ETHEREUM_ADDRESS,
  VERSE_BURN_ENGINE_GOERLI_ADDRESS,
  VERSE_BURN_ENGINE_POLYGON_ADDRESS,
  VERSE_BURN_ENGINE_SEPOLIA_ADDRESS,
} from "./constants";

const getBurnEngineDetails = (chainId?: number) => {
  switch (chainId) {
    case 1:
      return {
        address: VERSE_BURN_ENGINE_ETHEREUM_ADDRESS,
      };
    case 5:
      return {
        address: VERSE_BURN_ENGINE_GOERLI_ADDRESS,
      };
    case 137:
      return {
        address: VERSE_BURN_ENGINE_POLYGON_ADDRESS,
      };
    case 11155111:
      return {
        address: VERSE_BURN_ENGINE_SEPOLIA_ADDRESS,
      };
    default:
      return undefined;
  }
};

export default getBurnEngineDetails;
