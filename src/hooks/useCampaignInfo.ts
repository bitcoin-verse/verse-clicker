import axios, { AxiosError } from "axios";
import { useEffect, useRef } from "react";

import { CURRENT_CAMPAIGN } from "../constants";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch, useTrackedState } from "../context/store";

export type CampaignInfo = { startDate: number; endDate: number };
export type CampaignPhase = "BEFORE" | "DURING" | "AFTER";

const useCampaignInfo = () => {
  const {
    campaign: { campaignInfo, campaignPhase },
  } = useTrackedState();
  const timeout = useRef<NodeJS.Timeout>();
  const dispatch = useDispatch();
  const { isConnected } = useSocketCtx();

  const getInfo = async () => {
    try {
      const { data } = await axios.get<CampaignInfo>(
        `${
          process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
        }campaign/${CURRENT_CAMPAIGN}`,
      );
      dispatch({ type: "SET_CAMPAIGN", payload: { campaignInfo: data } });

      if (Date.now() >= data.startDate && Date.now() <= data.endDate) {
        dispatch({
          type: "SET_CAMPAIGN",
          payload: { campaignPhase: "DURING" },
        });
      } else if (Date.now() > data.endDate) {
        dispatch({ type: "SET_CAMPAIGN", payload: { campaignPhase: "AFTER" } });
      } else if (Date.now() < data.startDate) {
        dispatch({
          type: "SET_CAMPAIGN",
          payload: { campaignPhase: "BEFORE" },
        });
      }
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
    if (!isConnected) {
      return;
    }

    if (!campaignInfo) {
      getInfo();
      return;
    }
  }, [campaignInfo, isConnected]);

  useEffect(() => {
    if (!campaignInfo) {
      return;
    }

    if (campaignPhase === "DURING") {
      const msDiff = campaignInfo.endDate - Date.now();
      timeout.current = setTimeout(() => {
        getInfo();
      }, msDiff);
    } else if (campaignPhase === "BEFORE") {
      const msDiff = campaignInfo.startDate - Date.now();
      timeout.current = setTimeout(() => {
        getInfo();
      }, msDiff);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [campaignInfo, campaignPhase]);
};

export default useCampaignInfo;
