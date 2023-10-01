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
  verseHolder: boolean;
};

export type SetPlayerAction = { type: "SET_PLAYER_DATA"; payload: Player };

export const setPlayer = (
  state: State,
  payload: SetPlayerAction["payload"],
): State => {
  return { ...state, player: payload };
};
