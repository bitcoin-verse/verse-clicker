import buildings from "../../buildings";
import { State, initialState } from "../store";

export const resetGame = (state: State): State => {
  return {
    ...initialState,
    gameMode: state.gameMode,
    settings: state.settings,
    buildings: buildings[state.gameMode],
    isWallet: state.isWallet,
  };
};
