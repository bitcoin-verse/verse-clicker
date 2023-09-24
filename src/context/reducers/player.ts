import {
  clickedPlayerCookies,
  earnPlayerCookies,
} from "../../helpers/playerHelpers";
import { State } from "../store";

export type ClickCookieAction = { type: "CLICK_COOKIE" };

export const clickCookie = (state: State) => {
  return {
    ...state,
    player: clickedPlayerCookies(state.player),
  };
};

export type EarnCookieAction = { type: "EARN_COOKIE"; payload: number };

export const earnCookie = (
  state: State,
  payload: EarnCookieAction["payload"],
): State => {
  if (state.player.aMPF === 0) return state;

  return {
    ...state,
    player: earnPlayerCookies(state.player, payload),
  };
};
