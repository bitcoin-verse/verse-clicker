import { GameMode } from "../context/reducers/network";

const gameModes: Record<string, GameMode> = {
  christmas: "Christmas",
  ethereum: "Ethereum",
  polygon: "Polygon",
  goerli: "Goerli",
  sepolia: "Sepolia",
  lunarnewyear: "LunarNewYear",
};

export const getGameMode = (query: string | null) => {
  if (!query) return gameModes.ethereum;

  const sanitized = query.replaceAll("-", "").toLowerCase();

  return gameModes?.[sanitized] || gameModes.ethereum;
};
