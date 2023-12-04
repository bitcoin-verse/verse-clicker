import buildings from "../../buildings";
import { State } from "../store";

const networks = ["Ethereum", "Polygon", "Goerli"] as const;

export type NetworkName = (typeof networks)[number];

export type SetNetworkAction = { type: "SET_NETWORK"; payload: NetworkName };

export const isOfTypeNetworkName = (
  network: string,
): network is NetworkName => {
  return (networks as readonly string[]).includes(network);
};

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
