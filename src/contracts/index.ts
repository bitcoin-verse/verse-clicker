import { Abi } from "viem";
import verseEthereum from "./verseEthereum";
import verseGoerli from "./verseGoerli";
import versePolygon from "./versePolygon";

export const VERSE_TOKEN_CONTRACTS: Record<
  number,
  { address: `0x${string}`; abi: Abi }
> = {
  1: {
    address: "0x249ca82617ec3dfb2589c4c17ab7ec9765350a18",
    abi: verseEthereum,
  },
  5: {
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
    abi: verseGoerli,
  },
  137: {
    address: "0xc708d6f2153933daa50b2d0758955be0a93a8fec",
    abi: versePolygon,
  },
};

export const BURN_ENGINE_ADDRESSES: Record<number, `0x${string}`> = {
  1: "0x0000000000000000000000000000000000000000",
  5: "0x64393E8fEaad4fC8c53Ab5D5a39494A847f36619",
  137: "0x0000000000000000000000000000000000000000",
};
