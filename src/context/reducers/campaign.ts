import { CampaignInfo, CampaignPhase } from "../../hooks/useCampaignInfo";
import { State } from "../store";

export type SetCampaignAction = {
  type: "SET_CAMPAIGN";
  payload: {
    campaignInfo?: CampaignInfo;
    campaignPhase?: CampaignPhase;
    showCampaignBanner?: boolean;
  };
};

export const setCampaign = (
  state: State,
  payload: SetCampaignAction["payload"],
): State => {
  return {
    ...state,
    campaign: { ...state.campaign, ...payload },
  };
};
