import { useEffect } from "react";
import { NetworkName } from "../context/reducers/network";
import axios from "axios";

const useCampaignInfo = (campaign: NetworkName) => {
  useEffect(() => {
    const getInfo = async () => {
      const { data } = await axios.get(
        `${
          process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001"
        }/campaign/${campaign}`,
      );
      console.log(data);
    };

    getInfo();
  }, [campaign]);
};

export default useCampaignInfo;
