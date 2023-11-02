import buildings from "../../buildings";
import { State, initialState } from "../store";

export const resetGame = (state: State): State => {
  return {
    ...initialState,
    network: state.network,
    settings: state.settings,
    buildings: buildings[state.network],
    isWallet: state.isWallet,
  };
};
