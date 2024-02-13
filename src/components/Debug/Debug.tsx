import { WalletConnectModal } from "@walletconnect/modal";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import React, { FC } from "react";
import {
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSwitchNetwork,
} from "wagmi";

import { projectId } from "../../context/RootProvider";

const Debug: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const { signMessage, data: signData } = useSignMessage({
    message: "LMB",
  });

  const { open } = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();
  const { switchNetwork, chains } = useSwitchNetwork();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "1rem",
      }}
    >
      <button
        onClick={async () => {
          console.log(connectors);
          const wcConnector = connectors.find((c) => c.id === "walletConnect");
          console.log(wcConnector);
          wcConnector?.on("message", (ev) => {
            const modal = new WalletConnectModal({
              projectId,
              chains: ["eip155:137", "eip:155:1"],
              explorerRecommendedWalletIds: [
                "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
              ],
            });

            if (ev.type === "display_uri" && typeof ev.data === "string") {
              modal.openModal({
                uri: ev.data,
              });
            }
          });
          connect({
            chainId: 137,
            connector: wcConnector,
          });
          closeModal();
        }}
      >
        WC Manual trigger with id 137
      </button>
      <button
        onClick={async () => {
          console.log(connectors);
          const wcConnector = connectors.find((c) => c.id === "walletConnect");
          console.log(wcConnector);
          wcConnector?.on("message", (ev) => {
            const modal = new WalletConnectModal({
              projectId,
              chains: ["eip155:1", "eip:155:137"],
              explorerRecommendedWalletIds: [
                "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
              ],
            });

            if (ev.type === "display_uri" && typeof ev.data === "string") {
              modal.openModal({
                uri: ev.data,
              });
            }
          });
          connect({
            chainId: 1,
            connector: wcConnector,
          });
          closeModal();
        }}
      >
        WC Manual trigger with id 1
      </button>
      <button
        onClick={() => {
          closeModal();
          open({ view: "Connect" });
        }}
      >
        Open w3m (connect)
      </button>
      <button
        onClick={() => {
          closeModal();
          open({ view: "Networks" });
        }}
      >
        Open w3m (networks)
      </button>
      <hr />
      <button
        onClick={() => {
          if (switchNetwork) switchNetwork(1);
        }}
      >
        Switch to Ethereum
      </button>
      <button
        onClick={() => {
          if (switchNetwork) switchNetwork(137);
        }}
      >
        Switch to Polygon
      </button>
      <button
        type="button"
        onClick={() => {
          signMessage();
        }}
      >
        Sign Message
      </button>
      {signData && (
        <div
          style={{
            maxWidth: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {signData}
        </div>
      )}
      <hr />
      <button
        type="button"
        onClick={() => {
          disconnect();
        }}
      >
        Force disconnect
      </button>
      <hr />
      <h3>Info</h3>
      <div>w3m network: {selectedNetworkId || "nc"}</div>
      <div>wagmi chain: {chain?.id || "nc"}</div>
      <div>
        wagmi chains:
        {chains.map((c) => (
          <div key={c.id}>
            {c.id}: {c.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Debug;
