import { State } from "../store";

export type SetSettingsAction = {
  type: "SET_SETTINGS";
  payload?: {
    sound?: boolean;
    campaignBanner?: boolean;
  };
};

export const setSettings = (
  state: State,
  payload: SetSettingsAction["payload"],
): State => {
  return { ...state, settings: { ...state.settings, ...payload } };
};
