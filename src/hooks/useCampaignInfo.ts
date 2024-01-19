import axios, { AxiosError } from "axios";
import { useEffect, useRef } from "react";

import { CURRENT_CAMPAIGN } from "../constants";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch, useTrackedState } from "../context/store";
import useSocketEvents from "./useSocketEvents";

export type CampaignInfo = { startDate: number; endDate: number };
export type CampaignPhase = "BEFORE" | "DURING" | "AFTER";

const useCampaignInfo = () => {
  const {
    campaign: { campaignInfo },
  } = useTrackedState();
  const timeout = useRef<NodeJS.Timeout>();
  const dispatch = useDispatch();
  const { isConnected } = useSocketCtx();
  const { loading } = useSocketEvents();

  const getInfo = async () => {
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
  };

  useEffect(() => {
    if (!isConnected || loading) {
      return;
    }
    // start timer to auto switch the game to active (or inactive)
    if (!campaignInfo) {
      getInfo();
      return;
    }
    // console.log(new Date(campaignInfo.startDate).toISOString());
    // console.log(new Date(campaignInfo.endDate).toISOString());

    // started
    if (
      Date.now() >= campaignInfo.startDate &&
      Date.now() <= campaignInfo.endDate
    ) {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "DURING" } });
      const msDiff = campaignInfo.endDate - Date.now();

      timeout.current = setTimeout(() => {
        getInfo();
      }, msDiff);
    } else if (Date.now() > campaignInfo.endDate) {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "AFTER" } });
    } else if (Date.now() < campaignInfo.startDate) {
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "BEFORE" } });
      const msDiff = campaignInfo.startDate - Date.now();
      timeout.current = setTimeout(() => {
        getInfo();
      }, msDiff);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [campaignInfo, isConnected, loading]);
};

export default useCampaignInfo;
