import { GameMode } from "../context/reducers/network";

const gameModes: Record<string, GameMode> = {
  ethereum: "Ethereum",
  polygon: "Polygon",
  sepolia: "Sepolia",
};

const gameModeDefaultChain: Record<string, number> = {
  ethereum: 1,
  polygon: 137,
  sepolia: 11155111,
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
