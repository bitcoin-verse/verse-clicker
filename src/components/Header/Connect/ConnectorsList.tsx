import React, { FC } from "react";
import { useConnect } from "wagmi";

import injectedLogo from "../../../assets/injected.svg";
import mmLogo from "../../../assets/mm-logo.png";
import rabbyLogo from "../../../assets/rabby.svg";
import wcLogo from "../../../assets/wc-logo.png";
import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";
import { Button } from "../../Button";
import { getGameModeDetails } from "./GameModesList";

interface Props {
  closeModal: () => void;
}

const getConnectorIcon = (name: string) => {
  switch (name) {
    case "WalletConnect":
      return wcLogo;
    case "Rabby Wallet":
      return rabbyLogo;
    case "MetaMask":
      return mmLogo;
    default:
      return injectedLogo;
  }
};

const ConnectorsList: FC<Props> = ({ closeModal }) => {
  const { connectAsync, connectors } = useConnect();
  const { gameMode } = useTrackedState();

  return (
    <>
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            $size="small"
            $design="tertiary"
            onClick={async () => {
              try {
                logAmplitudeEvent({
                  name: "connect wallet option selected",
                  blockchain: gameMode,
                  connectOption: connector.name,
                });
                if (connector.id === "walletConnect") {
                  closeModal();
                }
                await connectAsync({
                  chainId: getGameModeDetails(gameMode)?.networks[0],
                  connector,
                });
              } catch (error) {
                logAmplitudeEvent({
                  name: "connect wallet result",
                  blockchain: gameMode,
                  success: false,
                });
              }
            }}
          >
            <img
              src={getConnectorIcon(connector.name)}
              alt={connector.name}
              height={24}
              width={24}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "0.5rem" }}>{connector.name}</div>
          </Button>
        );
      })}
    </>
  );
};

export default ConnectorsList;
