import ethSrc from "../assets/ethereum.png";
import gethSrc from "../assets/goerli.png";
import polySrc from "../assets/polygon.png";
import sethSrc from "../assets/sepolia.png";

const networkImages: Record<string, string> = {
  1: ethSrc,
  5: gethSrc,
  137: polySrc,
  11155111: sethSrc,
};

export const getNetworkImage = (chainId?: number) => {
  if (!chainId || !networkImages[chainId]) return gethSrc;

  return networkImages[chainId];
};
