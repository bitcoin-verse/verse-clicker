import { GameMode } from "../context/reducers/network";

const gameModes: Record<string, GameMode> = {
  christmas: "Christmas",
  ethereum: "Ethereum",
  polygon: "Polygon",
  goerli: "Goerli",
  sepolia: "Sepolia",
  lunarnewyear: "LunarNewYear",
};

const gameModeDefaultChain: Record<string, number> = {
  christmas: 137,
  ethereum: 1,
  polygon: 137,
  goerli: 5,
  sepolia: 11155111,
  lunarnewyear: 137,
};

export const getGameModeDefaultChain = (query: string | null) => {
  if (!query) return gameModeDefaultChain.ethereum;

  const sanitized = query.replaceAll("-", "").toLowerCase();

  return gameModeDefaultChain?.[sanitized] || gameModeDefaultChain.ethereum;
};

export const getGameMode = (query: string | null) => {
  if (!query) return gameModes.ethereum;

  const sanitized = query.replaceAll("-", "").toLowerCase();

  return gameModes?.[sanitized] || gameModes.ethereum;
};
