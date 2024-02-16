import React, { FC, PropsWithChildren, useMemo } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { WalletConnectConnector } from "./WalletConnectConnector";
import { useTrackedState } from "./store";

// Pauls projectId for testing
// const projectId = "8000cda0f00ad8e06049c5e030ddaa4c";
const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

const {
  REACT_APP_POLYGON_NODE_HTTP_URL,
  REACT_APP_POLYGON_NODE_WSS_URL,
  REACT_APP_ETHEREUM_NODE_HTTP_URL,
  REACT_APP_ETHEREUM_NODE_WSS_URL,
  REACT_APP_PUBLIC_URL,
} = process.env;

const url = "https://clicker.verse.bitcoin.com/";

const metadata = {
  name: "Verse Clicker",
  description: "Verse Clicker",
  url,
  icons: [`${REACT_APP_PUBLIC_URL || url}verse-moon.png`],
};

/* featuredWalletIds: [
  "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
],

themeVariables: {
  "--w3m-color-mix": "#000000",
  "--w3m-accent": "linear-gradient(180deg, #0EBEF0 0%, #0085FF 100%)",
  "--w3m-font-family": "Barlow",
}, */

const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  const { isWallet } = useTrackedState();
  const config = useMemo(() => {
    const { chains, publicClient, webSocketPublicClient } = configureChains(
      [polygon, mainnet],
      [
        jsonRpcProvider({
          rpc: (chain) => {
            switch (chain.id) {
              case 137: // polygon/matic
                return {
                  http: REACT_APP_POLYGON_NODE_HTTP_URL,
                  webSocket: REACT_APP_POLYGON_NODE_WSS_URL,
                };
              case 1: // ethereum
              default:
                return {
                  http: REACT_APP_ETHEREUM_NODE_HTTP_URL,
                  webSocket: REACT_APP_ETHEREUM_NODE_WSS_URL,
                };
            }
          },
        }),
      ],
    );

    const walletConnectConnector = new WalletConnectConnector({
      chains,
      options: {
        projectId,
        showQrModal: isWallet ? false : true,
        metadata,

        qrModalOptions: {
          themeMode: "dark",

          themeVariables: {
            // "--wcm-overlay-backdrop-filter": "0.4",
            // "--wcm-background-color": "transparent",
            "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
            "--wcm-font-family": "Barlow",
          },
          explorerRecommendedWalletIds: [
            "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
          ],
        },
      },
    });

    walletConnectConnector.on("message", (ev) => {
      if (
        ev.type === "display_uri" &&
        typeof ev.data === "string" &&
        isWallet
      ) {
        // "bitcoincom://wc?uri=wc%3A9eeb69fcb0cd2abe3fbd2826f8c59df3a63e7cb4125dc1da551b2c0c0fd16692%402%3Frelay-protocol%3Dirn%26symKey%3Db2716f639653df307fcbb5a406b08c1a0be396f04f9f890ef9a04edad58c9918";
        const wcUrl = `bitcoincom://wc?uri=${encodeURIComponent(ev.data)}`;
        console.log(wcUrl, ev.data);
        location.href = wcUrl;
        // open(wcUrl);
      }
    });

    return createConfig({
      autoConnect: true,

      connectors: [
        walletConnectConnector,
        ...(isWallet
          ? []
          : [
              new InjectedConnector({
                chains,
                options: {
                  shimDisconnect: true,
                },
              }),
            ]),
      ],
      publicClient,
      webSocketPublicClient,
    });
  }, [isWallet]);

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default Web3Provider;
