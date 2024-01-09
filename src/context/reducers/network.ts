import buildings from "../../buildings";
import { State } from "../store";

export type GameMode =
  | "Ethereum"
  | "Polygon"
  | "Goerli"
  | "Christmas"
  | "Sepolia";

export type SetGameModeAction = { type: "SET_GAME_MODE"; payload: GameMode };

export const setNetwork = (
  state: State,
  payload: SetGameModeAction["payload"],
): State => {
  return {
    ...state,
    gameMode: payload,
    buildings: buildings[payload],
    currentBuilding: buildings[payload][0].name,
  };
};
