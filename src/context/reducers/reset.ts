import buildings from "../../buildings";
import { getGameMode } from "../../helpers/gameMode";
import { State, initialState } from "../store";

export const resetGame = (state: State): State => {
  const search = new URLSearchParams(location.search);
  const campaign = search.get("campaign");

  const gameMode = getGameMode(campaign);
  return {
    ...initialState,
    gameMode,
    settings: state.settings,
    buildings: buildings[gameMode],
    isWallet: state.isWallet,
    error: state.error,
  };
};
