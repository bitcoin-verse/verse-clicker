import { GameMode } from "./context/reducers/network";

const VERSE_BASE_URL =
  process.env.REACT_APP_VERSE_BASE_URL || "https://verse.bitcoin.com/";

export const CURRENT_CAMPAIGN: GameMode | undefined = undefined;

export const GUILD_URL = "https://guild.xyz/verse";
export const VERSE_MARKETS_DEEPLINK =
  "bitcoincom://markets/ETH_BLOCKCHAIN-ERC_20_PROTOCOL-0x249ca82617ec3dfb2589c4c17ab7ec9765350a18";
export const VERSE_LOUNGE_URL = `${VERSE_BASE_URL}lounge/`;

export const LEADERBOARD_PAGE_SIZE = 25;
