import buildings from "../../buildings";
import { State } from "../store";

export type NetworkName = "Ethereum" | "Polygon" | "Goerli" | "Christmas";

export type SetNetworkAction = { type: "SET_NETWORK"; payload: NetworkName };

export const setNetwork = (
  state: State,
  payload: SetNetworkAction["payload"],
): State => {
  return {
    ...state,
    network: payload,
    buildings: buildings[payload],
    currentBuilding: buildings[payload][0].name,
  };
};
