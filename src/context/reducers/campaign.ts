import { State } from "../store";

export type SetCampaignBannerAction = {
  type: "SET_SHOW_CAMPAIGN_BANNER";
  payload?: boolean;
};

export const setShowCampaignBanner = (
  state: State,
  payload: SetCampaignBannerAction["payload"],
): State => {
  return { ...state, showCampaignBanner: payload };
};
