import React, { FC, PropsWithChildren } from "react";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygon } from "wagmi/chains";
import {
  createWeb3Modal,
  EIP6963Connector,
  Web3ModalOptions,
} from "@web3modal/wagmi/react";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ContextProvider } from "./store";
import SocketCtxProvider from "./SocketContext";

const search = new URLSearchParams(window.location.search);
const isWallet = search.get("origin") === "wallet";

const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

const metadata: Web3ModalOptions["metadata"] = {
  name: "Verse Clicker",
  description: "Verse Clicker",
  url: "https://clicker.verse.bitcoin.com",
  icons: [
    `${
      process?.env?.REACT_APP_PUBLIC_URL || "https://clicker.verse.bitcoin.com"
    }verse-moon.png`,
  ],
};
console.log(metadata);
const isDev = process.env.REACT_APP_DEV_ENV === "development";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  isDev ? [goerli, mainnet, polygon] : [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        switch (chain.id) {
          case 5:
            return {
              http: "https://rpc.ankr.com/eth_goerli",
              webSocket: `wss://ethereum-goerli.publicnode.com`,
            };
          case 137:
            return {
              http: "https://floral-empty-gas.matic.quiknode.pro/",
              webSocket: "wss://floral-empty-gas.matic.quiknode.pro/",
            };
          case 1:
          default:
            return {
              http: "https://wispy-solitary-darkness.quiknode.pro",
              webSocket: "wss://wispy-solitary-darkness.quiknode.pro",
            };
        }
      },
    }),
  ],
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
        showQrModal: false,
        metadata,
      },
    }),
    ...(isWallet
      ? []
      : [
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

  defaultChain: isDev ? goerli : mainnet,
  themeMode: "dark",
  featuredWalletIds: [
    "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
  ],

  themeVariables: {
    "--w3m-color-mix": "#000000",
    "--w3m-accent": "linear-gradient(180deg, #0EBEF0 0%, #0085FF 100%)",
    "--w3m-font-family": "Barlow",
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
