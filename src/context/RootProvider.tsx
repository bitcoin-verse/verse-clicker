import {
  EIP6963Connector,
  Web3ModalOptions,
  createWeb3Modal,
} from "@web3modal/wagmi/react";
import React, { FC, PropsWithChildren } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { goerli, mainnet, polygon, sepolia } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// import { getGameModeDefaultChain } from "../helpers/gameMode";
import { getNetworkImage } from "../helpers/getNetworkImage";
import SocketCtxProvider from "./SocketContext";
import { ContextProvider } from "./store";

const search = new URLSearchParams(window.location.search);
const isWallet = search.get("origin") === "wallet";
// const gameModeDefaultChain = getGameModeDefaultChain(search.get("campaign"));

const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

const metadata: Web3ModalOptions["metadata"] = {
  name: "Verse Clicker",
  description: "Verse Clicker",
  url: "https://clicker.verse.bitcoin.com",
  icons: [
    `${
      process?.env?.REACT_APP_PUBLIC_URL || "https://clicker.verse.bitcoin.com/"
    }verse-moon.png`,
  ],
};

const isDev = process.env.REACT_APP_DEV_ENV === "development";

const {
  REACT_APP_GOERLI_NODE_HTTP_URL,
  REACT_APP_GOERLI_NODE_WSS_URL,
  REACT_APP_SEPOLIA_NODE_HTTP_URL,
  REACT_APP_SEPOLIA_NODE_WSS_URL,
  REACT_APP_POLYGON_NODE_HTTP_URL,
  REACT_APP_POLYGON_NODE_WSS_URL,
  REACT_APP_ETHEREUM_NODE_HTTP_URL,
  REACT_APP_ETHEREUM_NODE_WSS_URL,
} = process.env;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  isDev ? [goerli, sepolia, mainnet, polygon] : [mainnet, polygon],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        switch (chain.id) {
          case 5: // goerli
            return {
              http: REACT_APP_GOERLI_NODE_HTTP_URL,
              webSocket: REACT_APP_GOERLI_NODE_WSS_URL,
            };
          case 11155111: // sepolia
            return {
              http: REACT_APP_SEPOLIA_NODE_HTTP_URL,
              webSocket: REACT_APP_SEPOLIA_NODE_WSS_URL,
            };
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

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...(isWallet
      ? [
          ...chains.map(
            (chain) =>
              new WalletConnectConnector({
                chains: [chain],
                options: {
                  projectId,
                  showQrModal: false,
                  metadata,
                },
              }),
          ),
        ]
      : [
          new WalletConnectConnector({
            chains,
            options: {
              projectId,
              showQrModal: false,
              metadata,
            },
          }),
          new EIP6963Connector({ chains }),
          new InjectedConnector({
            chains,
            options: { shimDisconnect: true },
          }),
          new CoinbaseWalletConnector({
            chains,
            options: { appName: metadata.name },
          }),
        ]),
  ],
  publicClient,
  webSocketPublicClient,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  // defaultChain: chains.find((i) => i.id === gameModeDefaultChain),
  themeMode: "dark",
  featuredWalletIds: [
    "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
  ],

  themeVariables: {
    "--w3m-color-mix": "#000000",
    "--w3m-accent": "linear-gradient(180deg, #0EBEF0 0%, #0085FF 100%)",
    "--w3m-font-family": "Barlow",
  },
  chainImages: {
    5: getNetworkImage(5),
    11155111: getNetworkImage(11155111),
  },
});

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ContextProvider>
        <SocketCtxProvider>{children}</SocketCtxProvider>
      </ContextProvider>
    </WagmiConfig>
  );
};

export default RootProvider;
