import { State } from "../store";

export type Player = {
  cookies: number;
  cps: number;
  cpc: number;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
};

export type SetPlayerDataAction = { type: "SET_PLAYER_DATA"; payload?: Player };

export const setPlayerData = (
  state: State,
  payload: SetPlayerDataAction["payload"],
): State => {
  return { ...state, playerData: payload };
};
