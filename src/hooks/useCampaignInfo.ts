import { useEffect, useState } from "react";
import { GameMode } from "../context/reducers/network";
import axios, { AxiosError } from "axios";

type CampaignInfo = { startDate: number; endDate: number };
export type CampaignPhase = "BEFORE" | "DURING" | "AFTER";

const useCampaignInfo = (campaign: GameMode) => {
  const [campaignInfo, setCampaignInfo] = useState<CampaignInfo>();
  const [campaignPhase, setCampaignPhase] = useState<CampaignPhase>("BEFORE");

  const getInfo = async () => {
    try {
      const { data } = await axios.get<CampaignInfo>(
        `${
          process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
        }campaign/${campaign}`,
      );
      setCampaignInfo(data);
    } catch (e) {
      const error = e as AxiosError;
      console.log(
        "Error getting campaign info for %s - ",
        campaign,
        error.message,
      );
    }
  };

  useEffect(() => {
    getInfo();
  }, [campaign]);

  useEffect(() => {
    // start timer to auto switch the game to active (or inactive)
    if (!campaignInfo) return;

    // started
    if (
      Date.now() > campaignInfo.startDate &&
      Date.now() < campaignInfo.endDate
    ) {
      setCampaignPhase("DURING");
    } else {
      setCampaignPhase("AFTER");
    }

    let timeout: NodeJS.Timeout;

    // not started
    if (Date.now() < campaignInfo.startDate) {
      setCampaignPhase("BEFORE");

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

  return { campaignInfo, campaignPhase };
};

export default useCampaignInfo;
