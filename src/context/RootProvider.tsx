import React, { FC, PropsWithChildren } from "react";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygon } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ContextProvider } from "./store";
import SocketCtxProvider from "./SocketContext";
import { walletConnectProvider } from "@web3modal/wagmi";

const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

const metadata = {
  name: "VERSE Clicker",
  description: "VERSE Clicker",
  url: "https://clicker.verse.bitcoin.com",
  icons: ["https://verse.bitcoin.com/images/favicon.png"],
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, goerli],
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
        // relayUrl: "wss://walletconnect-v2.ops.bitcoin.com",
      },
    }),
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,

  themeMode: "dark",
  featuredWalletIds: [
    "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  ],

  themeVariables: {
    "--w3m-color-mix": "#000000",
    "--w3m-accent": "linear-gradient(180deg, #0EBEF0 0%, #0085FF 100%)",
    "--w3m-color-mix-strength": 40,
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
