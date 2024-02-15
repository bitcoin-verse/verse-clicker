import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";

import { logAmplitudeEvent } from "../helpers/analytics";

const useAmplitudeEvents = () => {
  const { chain } = useNetwork();

  const [connectOption, setConnectOption] = useState<string>();

  /* useEffect(() => {
    switch (web3ModalEvents.event) {
      case "MODAL_OPEN":
        logAmplitudeEvent({
          name: "connect wallet clicked",
          blockchain: chain?.nativeCurrency.symbol,
        });
        break;
      case "SELECT_WALLET":
        setConnectOption(web3ModalEvents.properties.name);
        logAmplitudeEvent({
          name: "connect wallet option selected",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption: web3ModalEvents.properties.name,
        });
        break;

      case "CONNECT_SUCCESS":
        logAmplitudeEvent({
          name: "connect wallet result",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption,
          success: true,
        });
        break;
      case "CONNECT_ERROR":
        logAmplitudeEvent({
          name: "connect wallet result",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption,
          success: false,
        });
        setConnectOption(undefined);
        break;
      default:
        break;
    }
  }, [web3ModalEvents]); */
};

export default useAmplitudeEvents;
