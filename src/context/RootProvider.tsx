import React, { FC, PropsWithChildren } from "react";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygon } from "wagmi/chains";
import { createWeb3Modal, EIP6963Connector } from "@web3modal/wagmi/react";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ContextProvider } from "./store";
import SocketCtxProvider from "./SocketContext";
import { walletConnectProvider } from "@web3modal/wagmi";

const search = new URLSearchParams(window.location.search);
const isWallet = search.get("origin") === "wallet";

const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

const metadata = {
  name: "VERSE Clicker",
  description: "VERSE Clicker",
  url: "https://clicker.verse.bitcoin.com",
  icons: ["https://verse.bitcoin.com/images/favicon.png"],
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  process.env.NODE_ENV === "production"
    ? [mainnet]
    : [goerli, mainnet, polygon],
  [walletConnectProvider({ projectId }), publicProvider()],
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

  defaultChain: process.env.NODE_ENV === "production" ? mainnet : goerli,
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
