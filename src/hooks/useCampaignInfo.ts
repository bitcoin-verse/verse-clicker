import axios, { AxiosError } from "axios";
import { useCallback, useEffect } from "react";

import { CURRENT_CAMPAIGN } from "../constants";
import { useDispatch, useTrackedState } from "../context/store";

export type CampaignInfo = { startDate: number; endDate: number };
export type CampaignPhase = "BEFORE" | "DURING" | "AFTER";

const useCampaignInfo = () => {
  const {
    campaign: { campaignInfo },
  } = useTrackedState();

  const dispatch = useDispatch();

  const getInfo = useCallback(async () => {
    try {
      const { data } = await axios.get<CampaignInfo>(
        `${
          process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
        }campaign/${CURRENT_CAMPAIGN}`,
      );
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignInfo: data } });
    } catch (e) {
      const error = e as AxiosError;
      console.log(
        "Error getting campaign info for %s - ",
        CURRENT_CAMPAIGN,
        error.message,
      );
    }
  }, []);

  useEffect(() => {
    // start timer to auto switch the game to active (or inactive)
    if (!campaignInfo) {
      getInfo();
      return;
    }
    // console.log(new Date(campaignInfo.startDate).toISOString());
    // console.log(new Date(campaignInfo.endDate).toISOString());
    // started
    if (
      Date.now() > campaignInfo.startDate &&
      Date.now() < campaignInfo.endDate
    ) {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "DURING" } });
    } else {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "AFTER" } });
    }

    let timeout: NodeJS.Timeout;

    // not started
    if (Date.now() < campaignInfo.startDate) {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "BEFORE" } });

      const msDiff = campaignInfo.startDate - Date.now();

      timeout = setTimeout(() => {
        getInfo();
      }, msDiff);
      return;
    }

    // finished
    if (Date.now() < campaignInfo.endDate) {
      const msDiff = campaignInfo.endDate - Date.now();

      timeout = setTimeout(() => {
        getInfo();
      }, msDiff);
      return;
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [campaignInfo]);
};

export default useCampaignInfo;
