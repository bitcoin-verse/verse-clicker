import { useEffect, useState } from "react";
import { GameMode } from "../context/reducers/network";
import axios, { AxiosError } from "axios";
import { useNetwork } from "wagmi";
import { useDispatch } from "../context/store";

type CampaignInfo = { startDate: number; endDate: number };

const useCampaignInfo = (campaign: GameMode) => {
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const [campaignInfo, setCampaignInfo] = useState<CampaignInfo>();
  const [isActive, setIsActive] = useState<boolean>();

  const getInfo = async () => {
    try {
      const { data } = await axios.get<CampaignInfo>(
        `${
          process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001"
        }/campaign/${campaign}`,
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
      setIsActive(true);
    } else {
      setIsActive(false);
      dispatch({ type: "SET_GAME_MODE", payload: chain?.name as GameMode });
    }

    let timeout: NodeJS.Timeout;

    // not started
    if (Date.now() < campaignInfo.startDate) {
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

  return { campaignInfo, isActive };
};

export default useCampaignInfo;
