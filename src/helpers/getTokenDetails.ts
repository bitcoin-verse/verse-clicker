import verseEthereum from "../contracts/verseEthereum";
import verseGoerli from "../contracts/verseGoerli";
import versePolygon from "../contracts/versePolygon";

const getTokenDetails = (chainId: number) => {
  switch (chainId) {
    case 1:
      return {
        address: "0x249ca82617ec3dfb2589c4c17ab7ec9765350a18" as `0x${string}`,
        abi: verseEthereum as unknown as typeof verseEthereum,
      };
    case 5:
      return {
        address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84" as `0x${string}`,
        abi: verseGoerli as unknown as typeof verseEthereum,
      };
    case 137:
      return {
        address: "0xc708d6f2153933daa50b2d0758955be0a93a8fec" as `0x${string}`,
        abi: versePolygon as unknown as typeof verseEthereum,
      };

    default:
      return undefined;
  }
};

export default getTokenDetails;
