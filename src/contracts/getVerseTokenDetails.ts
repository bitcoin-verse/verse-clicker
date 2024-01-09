import {
  VERSE_TOKEN_ETHEREUM_ADDRESS,
  VERSE_TOKEN_GOERLI_ADDRESS,
  VERSE_TOKEN_POLYGON_ADDRESS,
  VERSE_TOKEN_SEPOLIA_ADDRESS,
} from "./constants";
import verseEthereum from "./verseEthereum";
import verseGoerli from "./verseGoerli";
import versePolygon from "./versePolygon";
import verseSepolia from "./verseSepolia";

const getVerseTokenDetails = (chainId?: number) => {
  switch (chainId) {
    case 1:
      return {
        address: VERSE_TOKEN_ETHEREUM_ADDRESS,
        abi: verseEthereum as unknown as typeof verseEthereum,
      };
    case 5:
      return {
        address: VERSE_TOKEN_GOERLI_ADDRESS,
        abi: verseGoerli as unknown as typeof verseEthereum,
      };
    case 137:
      return {
        address: VERSE_TOKEN_POLYGON_ADDRESS,
        abi: versePolygon as unknown as typeof verseEthereum,
      };
    case 11155111:
      return {
        address: VERSE_TOKEN_SEPOLIA_ADDRESS,
        abi: verseSepolia as unknown as typeof verseEthereum,
      };

    default:
      return undefined;
  }
};

export default getVerseTokenDetails;
